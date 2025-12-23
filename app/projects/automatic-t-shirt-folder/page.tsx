import React from 'react'
import ParticlesWrapper from '../ParticlesWrapper'

export const metadata = {
  title: 'Automatic T-shirt Folder - Cy R. Khaldi',
  description: 'Mechatronics design project: Automated T-shirt folding system with servo motors, DC motor control, and Arduino automation.',
}

const ARDUINO_CODE = `#include <Arduino.h>
#include <ESP32Servo.h>

#define BUTTON_PIN 21

// Cytron MD13S motor driver control pins
#define PWM_PIN 26      // PWM pin on MD13S (controls speed)
#define DIR_PIN 25      // DIR pin on MD13S (controls direction)

// Encoder pins (attached to the DC motor shaft)
// The encoder tells us how much the motor has turned.
#define ENC_A_PIN 27    // Encoder A channel (yellow wire)
#define ENC_B_PIN 32    // Encoder B channel (white wire)

// Servo pins – two small servos for the first two panels
#define SERVO1_PIN 14
#define SERVO2_PIN 12

// Ultrasonic sensor pins (distance sensor in front)
// TRIG sends a pulse, ECHO receives the reflected pulse.
#define TRIG_PIN 33
#define ECHO_PIN 15

// =================== Settings / Constants =============

// Distance threshold in cm. The sequence only runs
// if something is closer than this distance.
const int THRESHOLD_CM = 5;

// How long we wait during servo motions (in ms).
// This mainly controls how long it stays at each angle.
const int STEP_DELAY_MS = 500;

Servo s1, s2;

// How far DC panel turns by in PWM counts
long TARGET_COUNTS_FWD  = 610;

// PID Gains
float Kp = 1.8f;
float Ki = 0.0f;
float Kd = 0.0f;

// error tolerance for PID
const long POS_TOLERANCE = 15;

// Control loop timing (in milliseconds)
// The PID will update about every 10 ms.
const unsigned long PID_DT_MS    = 10;

// Safety timeout
const unsigned long MAX_MOVE_MS  = 4000;

const int MAX_PWM_FWD  = 255;   // full power forward
const int MAX_PWM_BACK = 100;   // slower on the way back

// Minimum PWM values. Below this, the motor might not move
// because of friction, so we enforce a baseline power.
const int MIN_PWM_FWD  = 100;   // minimum forward speed
const int MIN_PWM_BACK = 40;    // minimum backward speed

// How long the motor waits at the forward angle (in ms)
// before returning back to home position.
const int WAIT_TIME_MS = 750;

// Debounce time for the button (in ms).
// Helps ignore electrical noise when the button is pressed.
const int DEBOUNCE_MS  = 40;

const int GAP_BETWEEN_SERVOS_MS = 100;
const int GAP_BEFORE_DC_MS      = 100;

// Ultrasonic timeout – how long we wait for an echo (in microseconds)
// If we don't get an echo by then, we assume "no object".
const uint32_t ULTRA_TIMEOUT_US = 25000;

// This variable stores the current encoder count.
// It MUST be volatile because it is changed inside an interrupt.
volatile long encoderPos = 0;

// State Machine
// We use a simple state machine for the main loop so the logic
// is clear and easy to understand.

// Possible states the system can be in:
enum SystemState {
STATE_IDLE = 0,       // Waiting for button + distance check
STATE_RUN_SEQUENCE,   // Running full sequence (servos + DC motor)
STATE_WAIT_RELEASE    // Waiting for button to be released
};

// Start in the IDLE state
SystemState currentState = STATE_IDLE;

// This flag ensures that one button press only starts
// one sequence (prevents multiple triggers while held down)
bool armed = true;

//  Encoder ISR. This is the interrupt service routine for the encoder. So every time ENC_A changes, we look at DIR_PIN to decide, whether to count up or down.

void IRAM_ATTR encoderA_ISR() {
// If direction pin is HIGH, we say encoder is moving forward
if (digitalRead(DIR_PIN) == HIGH) {
    encoderPos++;   // add one count
} else {
    encoderPos--;   // subtract one count
}
}

//  Ultrasonic Helper
// This function triggers the ultrasonic sensor and measures
// the distance to an object in centimeters.
//
// If no object is detected (no echo), it returns a large number (9999).

float readDistanceCM() {
// Make sure trigger pin is LOW first
digitalWrite(TRIG_PIN, LOW);
delayMicroseconds(3);

// Send a 10 microsecond HIGH pulse to TRIG
digitalWrite(TRIG_PIN, HIGH);
delayMicroseconds(10);
digitalWrite(TRIG_PIN, LOW);

// Measure how long the ECHO pin stays HIGH (in microseconds).
// We also provide a timeout to avoid blocking forever.
unsigned long dur = pulseInLong(ECHO_PIN, HIGH, ULTRA_TIMEOUT_US);

// If duration is zero, no echo was received in time.
if (dur == 0) {
    return 9999.0f;          // treat as "no object"
}

// Standard formula to convert time to distance in cm
// for typical HC-SR04-like sensors.
return dur / 58.0f;
}

//  Motor Control (Cytron)
// These functions control the DC motor through the Cytron MD13S driver.

void motorCoast() {
// Set PWM to 0 to stop driving the motor.
analogWrite(PWM_PIN, 0);
}

void motorDrive(int pwmCommand) {
// pwmCommand is in the range [-255, +255]
// Positive = forward, Negative = backward, 0 = stop.

if (pwmCommand == 0) {
    motorCoast();
    return;
}

// Decide direction based on sign of pwmCommand
bool forward = (pwmCommand > 0);
int duty = abs(pwmCommand);   // get absolute value for PWM magnitude

// Pick minimum PWM depending on direction (forward/back)
int minPwm = forward ? MIN_PWM_FWD : MIN_PWM_BACK;

// Enforce minimum PWM so the motor actually moves
if (duty < minPwm) {
    duty = minPwm;
}

// Enforce maximum PWM for safety
if (duty > 255) {
    duty = 255;
}

// Set direction pin: HIGH = forward, LOW = backward
digitalWrite(DIR_PIN, forward ? HIGH : LOW);

// Apply PWM to control speed
analogWrite(PWM_PIN, duty);
}

// ================= PID Position Control ===============
// This function moves the motor to a specific encoder count
// using a simple PID control loop.
// It keeps adjusting motor power until the motor reaches
// the desired target position (or times out).

void moveToPosition(long targetCounts) {
Serial.println();
Serial.print("moveToPosition(");
Serial.print(targetCounts);
Serial.println(")");

// Mark the time when we started this move
unsigned long startTime = millis();

// PID internal variables
float integral = 0.0f;
float lastError = 0.0f;
unsigned long lastTime = millis();

while (true) {
    unsigned long now = millis();

    // Only run the PID calculation every PID_DT_MS
    if (now - lastTime < PID_DT_MS) {
    // Sleep briefly to avoid tight spinning
    delay(1);
    continue;
    }

    // Compute time step in seconds
    float dt = (now - lastTime) / 1000.0f;
    lastTime = now;

    // Read current encoder position
    long pos;
    noInterrupts();
    pos = encoderPos;
    interrupts();

    // Error = target - current
    long errorCounts = targetCounts - pos;
    long absError = labs(errorCounts);

    // Debug info to Serial Monitor
    Serial.print("pos = ");
    Serial.print(pos);
    Serial.print("  err = ");
    Serial.print(errorCounts);
    Serial.print("  out = ");

    // If we are close enough, stop moving
    if (absError <= POS_TOLERANCE) {
    Serial.println("DONE");
    break;
    }

    //  PID CALCULATION
    float error = (float)errorCounts;

    // Integrate error over time (for I term)
    integral += error * dt;

    // Prevent the integral term from getting too large (anti-windup)
    if (integral > 1000.0f) integral = 1000.0f;
    if (integral < -1000.0f) integral = -1000.0f;

    // Derivative term based on rate of change of error
    float derivative = (error - lastError) / dt;
    lastError = error;

    // PID output = P*error + I*integral + D*derivative
    float output = Kp * error + Ki * integral + Kd * derivative;

    // Limit the PID output differently for forward and backward
    if (output > 0 && output > MAX_PWM_FWD) {
    output = MAX_PWM_FWD;
    }
    if (output < 0 && -output > MAX_PWM_BACK) {
    output = -MAX_PWM_BACK;
    }

    Serial.println(output);

    // Drive the motor using the computed output
    motorDrive((int)output);

    // Safety timeout – if move takes too long, stop.
    if (now - startTime > MAX_MOVE_MS) {
    Serial.println("moveToPosition() TIMEOUT, stopping motor.");
    break;
    }
}

// Once we're done, stop the motor
motorCoast();
delay(50);   // small pause to let mechanical system settle
}

//  DC Motor Sequence
// This function runs the DC motor part of your sequence:
//
// 1) Reads current encoder position as "home" (starting angle)
// 2) Moves forward by TARGET_COUNTS_FWD from that home
// 3) Waits a bit at the forward angle
// 4) Moves exactly back to the original home position

void runDCSequence() {
Serial.println("\\n=== RUNNING DC SEQUENCE ===");

// 1) Capture current angle as HOME
long homePos;
noInterrupts();
homePos = encoderPos;   // this is your assigned home position for THIS run
interrupts();

Serial.print("Home position (counts): ");
Serial.println(homePos);

// 2) Compute forward target relative to home
long forwardTarget = homePos + TARGET_COUNTS_FWD;

Serial.println("Move to forward angle...");
moveToPosition(forwardTarget);  // go from homePos to homePos + 600

// Wait at the forward position
delay(WAIT_TIME_MS);

// 3) Go EXACTLY back to the original home position
Serial.println("Move back to home...");
moveToPosition(homePos);  // return to the same count we started at

Serial.println("DC Sequence complete.\\n");
}

//  Servo Sequences
// Servo 1 and Servo 2 each do:
//  - Move to "home" angle (100°)
//  - Sweep up to 200° (effectively ~180° due to clamping inside library)
//  - Then return back to 100°

void runServo1Sequence() {
Serial.println("Running Servo 1 sequence...");

// Ensure we start from home position
s1.write(100);
delay(150);

// Move CLOCKWISE: 100 -> 200 (clamped to ~180 internally)
s1.write(200);
delay(STEP_DELAY_MS);

// Return to home
s1.write(100);
delay(STEP_DELAY_MS);
}

void runServo2Sequence() {
Serial.println("Running Servo 2 sequence...");

// Ensure we start from home position
s2.write(100);
delay(150);

// Move CLOCKWISE: 100 -> 200 (clamped to ~180 internally)
s2.write(200);
delay(STEP_DELAY_MS);

// Return to home
s2.write(100);
delay(STEP_DELAY_MS);
}

//  Full Combined Sequence
// This function runs the entire motion sequence:
//
// 1) Servo 1 up and down
// 2) Wait a bit
// 3) Servo 2 up and down
// 4) Wait a bit
// 5) DC motor out and back

void runFullSequence() {
Serial.println("\\n=== FULL SEQUENCE START ===");

// 1) Run servo 1 panel
runServo1Sequence();

// Wait between pane 1 and pane 2
delay(GAP_BETWEEN_SERVOS_MS);

// 2) Run servo 2 panel
runServo2Sequence();

// Wait before starting DC panel
delay(GAP_BEFORE_DC_MS);

// 3) Run DC motor panel
runDCSequence();

Serial.println("=== FULL SEQUENCE END ===\\n");
}

//  Setup
// This runs once at boot.

void setup() {
Serial.begin(115200);
delay(200);  // small start-up delay

// --- Servo setup ---
s1.setPeriodHertz(50);  // standard 50 Hz for servos
s2.setPeriodHertz(50);

// Attach servos to their pins, with pulse width limits
s1.attach(SERVO1_PIN, 500, 2400);
s2.attach(SERVO2_PIN, 500, 2400);

// Move servos to their starting "home" angle
s1.write(100);
s2.write(100);
delay(500);

//  Button setup
// INPUT_PULLUP means:
//  - Not pressed = reads HIGH
//  - Pressed = connected to GND = reads LOW
pinMode(BUTTON_PIN, INPUT_PULLUP);

//  DC motor driver pins
pinMode(PWM_PIN, OUTPUT);
pinMode(DIR_PIN, OUTPUT);
motorCoast();  // make sure motor is off

//  Encoder pins
pinMode(ENC_A_PIN, INPUT_PULLUP);
pinMode(ENC_B_PIN, INPUT_PULLUP);

// Attach interrupt to encoder A pin.
// Whenever ENC_A changes, encoderA_ISR() is called.
attachInterrupt(digitalPinToInterrupt(ENC_A_PIN), encoderA_ISR, CHANGE);

// Zero encoder at power-on (starting baseline at boot)
noInterrupts();
encoderPos = 0;
interrupts();

//  Ultrasonic pins
pinMode(TRIG_PIN, OUTPUT);
pinMode(ECHO_PIN, INPUT);
digitalWrite(TRIG_PIN, LOW);  // make sure TRIG starts low

Serial.println("System ready.");
Serial.println("Motor will treat its CURRENT angle at sequence start as HOME,");
Serial.println("then go +600 counts, then EXACTLY back to that starting angle.");
}

//  Loop
// This runs repeatedly after setup().
// Here we handle:
//  - printing distance regularly
//  - checking button & distance
//  - running the sequence using a switch-case state machine

void loop() {
// ---- Continuous ultrasonic distance printing ----
// This prints the distance every 200 ms so you can see
// what the ultrasonic sensor is reading in real time.
static unsigned long lastPrintTime = 0;
if (millis() - lastPrintTime >= 200) {
    float d = readDistanceCM();
    Serial.print("Ultrasonic Distance: ");
    Serial.print(d);
    Serial.println(" cm");
    lastPrintTime = millis();
}

// Main state machine for button + sequence control
switch (currentState) {
    case STATE_IDLE: {
    // In this state, we wait for the button to be pressed
    // and for an object to be within THRESHOLD_CM.

    if (digitalRead(BUTTON_PIN) == LOW && armed) {
        // Button seems pressed, wait a short time for debounce
        delay(DEBOUNCE_MS);

        // Check again to make sure button is still pressed
        if (digitalRead(BUTTON_PIN) == LOW) {
        // Measure distance from ultrasonic sensor
        float distance = readDistanceCM();
        Serial.print("Button press distance: ");
        Serial.print(distance);
        Serial.println(" cm");

        if (distance <= THRESHOLD_CM) {
            // Object is close enough – run the full sequence
            Serial.println("Object detected within threshold -> running sequence.");
            armed = false;      // prevent retrigger while button is held
            currentState = STATE_RUN_SEQUENCE;
        } else {
            // Object is too far – do not run the sequence
            Serial.println("No object close -> sequence NOT run.");
            armed = false;      // still disarm until button released
            currentState = STATE_WAIT_RELEASE;
        }
        }
    }
    break;
    }

    case STATE_RUN_SEQUENCE: {
    // In this state, we run the full motion sequence.
    // This function is blocking (it uses delays and the PID loop),
    // but that's okay for this project.

    runFullSequence();

    // After the sequence is finished, we move to the state
    // where we wait for the button to be released.
    currentState = STATE_WAIT_RELEASE;
    break;
    }

    case STATE_WAIT_RELEASE: {
    // Here we just wait until the button is released.
    // Once released, we re-arm the system and go back to idle.

    if (digitalRead(BUTTON_PIN) == HIGH) {
        // Button is no longer pressed
        armed = true;
        currentState = STATE_IDLE;
    }
    break;
    }

    default:
    // If somehow we end up in an unknown state, reset to IDLE
    currentState = STATE_IDLE;
    break;
}
}`

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      
      <h2 className="font-semibold text-3xl mb-4 tracking-tight text-white">Automatic T-shirt Folder</h2>
      <p className="text-blue-200 text-lg mb-8">Mechatronics Design Project | ME 102B</p>
      
      {/* Project Overview */}
      <div className="space-y-6">
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <div className="flex flex-col space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
              <p className="text-gray-300">
                The Automatic T-shirt Folder is a mechatronics system designed to automate the process of folding T-shirts. 
                The system uses a combination of servo motors for precise panel movements and a DC motor with PID control 
                for accurate positioning. An ultrasonic sensor detects when a T-shirt is placed, and the system executes 
                a coordinated sequence to fold the garment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Technical Details</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li><strong>Microcontroller:</strong> ESP32</li>
                <li><strong>Actuators:</strong> 2x Servo motors (panels 1 & 2), 1x DC motor with encoder (panel 3)</li>
                <li><strong>Sensors:</strong> Ultrasonic distance sensor (HC-SR04), Encoder for DC motor position feedback</li>
                <li><strong>Control:</strong> PID position control for DC motor, State machine for sequence coordination</li>
                <li><strong>Motor Driver:</strong> Cytron MD13S for DC motor control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Image Gallery</h3>
          
          {/* CAD Models Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">CAD Models</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EDIT CAPTION BELOW - CAD 1 */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/CAD 1.png" 
                  alt="CAD Model - Front View" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: CAD 1 - Change the text below */}
                  CAD Model - Iso View 1
                </p>
              </div>
              {/* EDIT CAPTION BELOW - CAD 2 */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/CAD 2.png" 
                  alt="CAD Model - Detailed View" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: CAD 2 - Change the text below */}
                  CAD Model - Iso View 2
                </p>
              </div>
            </div>
          </div>

          {/* Physical Device Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">Physical Device</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EDIT CAPTION BELOW - IMG_4859 */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/IMG_4859.jpg" 
                  alt="Physical Device - Assembly View" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: IMG_4859 - Change the text below */}
                  Physical Device - Complete assembly 1
                </p>
              </div>
              {/* EDIT CAPTION BELOW - IMG_4863 */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/IMG_4863.jpg" 
                  alt="Physical Device - Close-up View" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: IMG_4863 - Change the text below */}
                  Physical Device - Complete assembly 2                </p>
              </div>
            </div>
          </div>

          {/* System Diagrams Section */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-white mb-4">System Diagrams</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EDIT CAPTION BELOW - Circuit Diagram */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/Circuit Diagram.png" 
                  alt="Circuit Diagram" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: Circuit Diagram - Change the text below */}
                  Circuit Diagram - Complete electrical schematic showing ESP32, motor drivers, sensors, and connections
                </p>
              </div>
              {/* EDIT CAPTION BELOW - State Transition Diagram */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30">
                <img 
                  src="/automatic-t-shirt-folder/State Transition Diagram.png" 
                  alt="State Transition Diagram" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: State Transition Diagram - Change the text below */}
                  State Transition Diagram - System state machine showing IDLE, RUN_SEQUENCE, and WAIT_RELEASE states
                </p>
              </div>
              {/* EDIT CAPTION BELOW - Integrated System Architecture */}
              <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/30 md:col-span-2">
                <img 
                  src="/automatic-t-shirt-folder/Integrated Physical Device and Subsystems.png" 
                  alt="Integrated System Architecture" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-sm text-gray-400 text-center">
                  {/* EDIT CAPTION: Integrated System Architecture - Change the text below */}
                  Integrated System Architecture - Overview of physical device integration with all subsystems and components
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Video Demonstration</h3>
          <video 
            src="/automatic-t-shirt-folder/IMG_4777.mov" 
            controls 
            className="w-full rounded-lg"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Code Section */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Arduino Code</h3>
          <pre className="bg-black/50 rounded-lg p-3 overflow-x-auto text-xs leading-tight">
            <code className="text-gray-300">{ARDUINO_CODE}</code>
          </pre>
        </div>

        {/* Bill of Materials */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Bill of Materials</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="pb-2 pr-4">Component</th>
                  <th className="pb-2 pr-4">Quantity</th>
                  <th className="pb-2">Description</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">ESP32</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Microcontroller</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">Servo Motors</td>
                  <td className="py-2 pr-4">2</td>
                  <td className="py-2">For panels 1 & 2</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">DC Motor with Encoder</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">For panel 3 with position feedback</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">Cytron MD13S</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">DC motor driver</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">HC-SR04</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Ultrasonic distance sensor</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 pr-4">Push Button</td>
                  <td className="py-2 pr-4">1</td>
                  <td className="py-2">Trigger button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

