import React from 'react'
import ParticlesWrapper from '../ParticlesWrapper'

export const metadata = {
  title: 'Anti Bike Theft System - Cy R. Khaldi',
  description: 'Engineering project: An innovative anti-theft system designed to protect bicycles from theft using advanced security mechanisms.',
}

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      <h1 className="font-semibold text-3xl mb-8 tracking-tight text-white">Anti Bike Theft System</h1>
      
      {/* Project Overview */}
      <div className="space-y-6">
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <div className="flex flex-col space-y-8">
            {/* Project Info */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Anti Bike Theft System</h2>
                <p className="text-blue-200 text-lg">Engineering Project</p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                    <p className="text-gray-300">
                      The Bike Alarm System is a wireless anti-theft solution designed to protect bicycles using motion detection, 
                      GPS tracking, and real-time alerts. The system consists of two ESP32-based modules: a bike module that detects 
                      motion and sends alerts, and a remote control that receives notifications and provides user controls. The system 
                      uses ESP-NOW for peer-to-peer wireless communication, eliminating the need for Wi-Fi infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">System Architecture</h3>
                    <p className="text-gray-300 mb-3">
                      The system is built on two ESP32 microcontrollers communicating via ESP-NOW protocol:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-blue-300 mb-2">Bike Module</h4>
                        <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                          <li>LSM6DSO IMU for motion detection</li>
                          <li>GPS module for location tracking</li>
                          <li>Buzzer for audible alarms</li>
                          <li>Red/Green LED status indicators</li>
                          <li>ESP-NOW transmitter</li>
                        </ul>
                      </div>
                      <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-green-300 mb-2">Remote Control</h4>
                        <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                          <li>Multi-click button interface</li>
                          <li>Vibration motor for alerts</li>
                          <li>Red/Green LED status indicators</li>
                          <li>ESP-NOW receiver</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Communication Flow</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-blue-300 mb-2">Bike Module Functions</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li>• <strong>Motion Detection:</strong> Uses IMU to detect motion. Requires 5 consecutive motion events to trigger alarm (prevents false alarms from accidental bumps)</li>
                          <li>• <strong>Alarm System:</strong> When triggered, sends alarm message to remote and plays alternating buzzer tones (440Hz, 622Hz pattern)</li>
                          <li>• <strong>GPS Tracking:</strong> Continuously parses GPS data and can transmit location information</li>
                          <li>• <strong>Commands Received:</strong>
                            <ul className="ml-6 mt-1 space-y-1 list-disc">
                              <li><code className="text-blue-300">stop</code> → Stops alarm and buzzer</li>
                              <li><code className="text-blue-300">ping</code> → Plays notification chirp to help locate bike</li>
                              <li><code className="text-blue-300">disable</code> → Turns off motion detection (Safety Mode ON)</li>
                              <li><code className="text-blue-300">enable</code> → Re-enables motion detection (Safety Mode OFF)</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="text-md font-semibold text-green-300 mb-2">Remote Control Functions</h4>
                        <ul className="text-gray-300 space-y-2 text-sm">
                          <li>• <strong>Double Click:</strong> Sends ping to bike module, causing it to chirp for location assistance</li>
                          <li>• <strong>Triple Click:</strong> Toggles safety mode (enables/disables motion detection)</li>
                          <li>• <strong>On Alarm:</strong> Vibration motor pulses 3 times, red LED blinks</li>
                          <li>• <strong>Button Press During Alert:</strong> Stops alert, sends stop command to bike, green LED confirms system cleared</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• <strong>LED Status Indicators:</strong> Red LED = system armed and monitoring, Green LED = system disarmed or cleared</li>
                      <li>• <strong>Motion Detection:</strong> Calibrated IMU with configurable threshold (default 4000) to detect unauthorized movement</li>
                      <li>• <strong>False Alarm Prevention:</strong> Requires 5 consecutive motion detections before triggering alarm</li>
                      <li>• <strong>GPS Integration:</strong> Parses NMEA GPRMC sentences for latitude, longitude, and speed data</li>
                      <li>• <strong>Wireless Communication:</strong> ESP-NOW protocol for low-latency, infrastructure-free communication</li>
                      <li>• <strong>Safety Mode:</strong> Ability to disable motion detection when bike is in use</li>
                      <li>• <strong>Multi-Click Interface:</strong> Intuitive button controls for different functions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technical Implementation</h3>
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                  <h4 className="text-md font-semibold text-white mb-3">Hardware Components</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• <strong>ESP32 Microcontrollers (x2):</strong> Main processing units for bike module and remote</li>
                    <li>• <strong>LSM6DSO IMU:</strong> 6-axis accelerometer/gyroscope for motion detection via I2C</li>
                    <li>• <strong>GPS Module:</strong> UART-based GPS receiver for location tracking</li>
                    <li>• <strong>Buzzer:</strong> PWM-controlled piezo buzzer for audible alarms</li>
                    <li>• <strong>Vibration Motor:</strong> PWM-controlled motor for tactile alerts on remote</li>
                    <li>• <strong>LEDs:</strong> Red and green status indicators for system state</li>
                    <li>• <strong>Button:</strong> Pull-up configured button with multi-click detection</li>
                  </ul>
                </div>
                <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50 mt-4">
                  <h4 className="text-md font-semibold text-white mb-3">Software Architecture</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• <strong>Language:</strong> MicroPython (adapted from Python 3 for microcontrollers)</li>
                    <li>• <strong>Communication:</strong> ESP-NOW protocol for peer-to-peer messaging</li>
                    <li>• <strong>Motion Detection:</strong> Calibration-based threshold detection with motion counter</li>
                    <li>• <strong>GPS Parsing:</strong> NMEA GPRMC sentence parsing for location data</li>
                    <li>• <strong>State Management:</strong> Armed/disarmed states with safety mode toggle</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["MicroPython", "ESP32", "ESP-NOW", "I2C", "UART", "PWM", "LSM6DSO IMU", "GPS", "Embedded Systems", "Wireless Communication", "Sensor Integration", "Real-time Systems"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-400/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              </div>

              {/* Image Gallery */}
              <div className="lg:w-1/2">
                <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.26.54 PM.png" 
                      alt="Anti Bike Theft System - System Overview"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.27.30 PM.png" 
                      alt="Anti Bike Theft System - Design Components"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.27.38 PM.png" 
                      alt="Anti Bike Theft System - Locking Mechanism Detail"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.27.52 PM.png" 
                      alt="Anti Bike Theft System - Electronic Circuit Design"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.28.00 PM.png" 
                      alt="Anti Bike Theft System - Sensor Integration"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.28.08 PM.png" 
                      alt="Anti Bike Theft System - System Assembly"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/anti-bike-theft-system/Screenshot 2025-11-02 at 6.28.15 PM.png" 
                      alt="Anti Bike Theft System - Final Prototype"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

