import React from 'react'
import ParticlesWrapper from '../ParticlesWrapper'

export const metadata = {
  title: 'Formula Electric at Berkeley - Autonomous Vehicles - Cy R. Khaldi',
  description: 'Hardware engineering for autonomous electric vehicle systems including Steer-by-Wire and Brake-by-Wire systems.',
}

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      <h1 className="font-semibold text-3xl mb-8 tracking-tight text-white">Formula Electric at Berkeley - Autonomous Vehicles</h1>
      
      {/* Project Overview */}
      <div className="space-y-6">
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300">
                As part of Formula Electric at Berkeley's autonomous vehicle team, I worked on developing critical hardware systems 
                for our second-generation autonomous electric vehicle. The project focused on implementing Steer-by-Wire and 
                Brake-by-Wire systems with BLDC motor actuation, along with precise sensor integration for autonomous navigation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Technologies & Skills</h2>
              <div className="flex flex-wrap gap-2">
                {["SOLIDWORKS", "ANSYS FEA", "BLDC Motors", "LiDAR", "Automotive Systems", "Steer-by-Wire", "Brake-by-Wire", "Sensor Integration"].map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Steer-by-Wire Design Approach */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Steer-by-Wire Design Approach</h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-gray-300 leading-relaxed">
              The goal of Steer-by-Wire (SBW) is to develop a completely independent steering system for our autonomous vehicle. 
              Before designing the SBW system, I evaluated critical factors to determine the best place to rotate the steering column:
            </p>
            
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Design Criteria</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Can handle required load</li>
                <li>Can fit decently sized motor</li>
                <li>Will not interfere with driver</li>
              </ul>
            </div>
          </div>

          {/* Steering Calculations */}
          <div className="bg-gray-900/30 rounded-xl p-6 mb-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Steering Calculations</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Actuation Time Calculation</h4>
                <p className="text-gray-300 mb-3">
                  A driver can turn the steering wheel from -90° to 90° in around 1 second, or 180° in 1 second.
                </p>
                <ul className="text-gray-300 space-y-2 ml-6 list-disc">
                  <li>This is equivalent to <strong className="text-white">30 rpm</strong></li>
                  <li>Rotary motor requirements:
                    <ul className="ml-6 mt-2 space-y-1 list-disc">
                      <li>30 rpm</li>
                      <li>Handle 10 Nm of torque</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-300 mb-2">NEMA 34 Stepper Motor</h4>
                <p className="text-gray-300">Dimensions: 156mm × 34mm × 34mm</p>
              </div>
            </div>
          </div>

          {/* Design Process - Sketches */}
          <div className="bg-gray-900/30 rounded-xl p-6 mb-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Design Process - Initial Sketches</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/pdf_page_8_img_6.png" 
                  alt="Design Sketch 1" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-xs text-gray-400 text-center">Sketch #1: Stepper motor with timing pulley and custom mount</p>
              </div>
              
              <div className="bg-gray-800/50 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/pdf_page_8_img_7.png" 
                  alt="Design Sketch 2" 
                  className="w-full rounded-lg mb-3"
                />
                <p className="text-xs text-gray-400 text-center">Sketch: Stepper motor mount with aiming pulley</p>
              </div>
            </div>
          </div>

          {/* Design Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Belt Drive Design */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Belt Drive Steering Column</h3>
              
              <div className="mb-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/pdf_page_5_img_3.png" 
                  alt="Belt Drive Design" 
                  className="w-full rounded-lg mb-3 bg-gray-800/50 p-2"
                />
                <p className="text-xs text-gray-400 text-center">Belt drive steering column concept</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-2">Proposed Solution</h4>
                  <p className="text-gray-300 text-sm mb-3">
                    Power intermediate steering shaft through belt/gear driven design
                  </p>
                  
                  <h5 className="text-xs font-semibold text-green-300 mt-3 mb-1">Pros:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside ml-2">
                    <li>Simple module, can be placed anywhere on the shaft</li>
                  </ul>
                  
                  <h5 className="text-xs font-semibold text-yellow-300 mt-3 mb-1">Issues:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside ml-2">
                    <li>Requires space in front/behind steering column</li>
                    <li>Separate battery needed</li>
                    <li>Needed a motor that would produce ~10 Nm of torque</li>
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <h4 className="text-sm font-semibold text-blue-300 uppercase tracking-wide mb-2">Belt Driven Design</h4>
                  
                  <h5 className="text-xs font-semibold text-green-300 mt-2 mb-1">Pros:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside ml-2">
                    <li>Over torque will lead to snapping of the belt instead of breaking mechanical systems</li>
                  </ul>
                  
                  <h5 className="text-xs font-semibold text-yellow-300 mt-3 mb-1">Issues:</h5>
                  <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside ml-2">
                    <li>Requires slightly more space</li>
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-4 bg-gray-800/30 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-white mb-2">Autonomous Steering System - Belt Drive</h4>
                  <ul className="text-gray-300 space-y-1 text-xs list-disc list-inside">
                    <li><strong>33t → 55t Gear:</strong> 1.5 Ratio</li>
                    <li><strong>GT2 Belts:</strong> 6mm width (initially), upgraded to 5mm Pitch, 9mm Width</li>
                    <li><strong>Motor:</strong> 10 Nm Stepper w/ encoder</li>
                    <li><strong>Motor Mount:</strong> 0.1 inch Steel, FoS = 1.4</li>
                    <li><strong>Belt Capacity:</strong> Rated up to 12.6 Nm, T_static ~ 37.5 Nm</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Dual Steering Rack Design */}
            <div className="bg-gray-900/40 rounded-xl p-6 border border-blue-500/50">
              <h3 className="text-xl font-semibold text-white mb-4">Dual Steering Rack</h3>
              
              <div className="mb-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/pdf_page_5_img_4.png" 
                  alt="Dual Steering Rack Design" 
                  className="w-full rounded-lg mb-3 bg-gray-800/50 p-2"
                />
                <p className="text-xs text-gray-400 text-center">Dual steering rack configuration</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide">Advantages</h4>
                <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                  <li>Direct mechanical connection via parallel steering rack</li>
                  <li>Higher reliability with no belt wear or slippage</li>
                  <li>Capable of handling 12+ Nm of torque consistently</li>
                  <li>Superior precision and control for autonomous operation</li>
                  <li>Lower long-term maintenance requirements</li>
                  <li>Robust performance under varying conditions</li>
                </ul>
                
                <h4 className="text-sm font-semibold text-yellow-300 uppercase tracking-wide mt-4">Considerations</h4>
                <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                  <li>More complex initial design and integration</li>
                  <li>Requires precise alignment and mounting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Belt Drive Parts List */}
          <div className="bg-gray-900/30 rounded-xl p-6 mb-8 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-white mb-4">Belt Drive System - Parts List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>NEMA 34 Stepper motor</li>
                <li>Large pulley gear</li>
                <li>Small pulley gear</li>
                <li>X4 M5 Socket head bolts</li>
              </ul>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Washer (Hi-Collar lock washer)</li>
                <li>Steel sheet for motor mount</li>
                <li>Shaft collar for gears</li>
              </ul>
            </div>
            
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-semibold text-yellow-300 mb-2">Future Work Considerations</h4>
              <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                <li>How to secure timing pulleys to steering column</li>
                <li>Slots for belt tensioning</li>
                <li>How to manufacture timing pulleys</li>
              </ul>
            </div>
          </div>

          {/* Selected Design - Dual Rack */}
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Selected Design: Dual Steering Rack</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              After comprehensive analysis and research into belt capacities, the <strong className="text-white">dual steering rack design</strong> was selected as the 
              optimal solution for our autonomous vehicle platform. This design provides a direct mechanical connection between the 
              BLDC motor-gearbox package and the steering mechanism, eliminating potential failure modes associated with belt drive systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-900/30 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.28 AM.png" 
                  alt="Dual Rack Assembly" 
                  className="w-full rounded-lg mb-2"
                />
                <p className="text-xs text-gray-400 text-center">Dual rack assembly view</p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.39 AM.png" 
                  alt="Motor Integration" 
                  className="w-full rounded-lg mb-2"
                />
                <p className="text-xs text-gray-400 text-center">BLDC motor and gearbox integration</p>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <h4 className="text-lg font-semibold text-white">Key Design Features</h4>
              <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm">
                <li><strong>BLDC Motor + Gearbox Package:</strong> Carefully selected to provide 12+ Nm torque output with precise control</li>
                <li><strong>Parallel Secondary Steering Rack:</strong> Direct mechanical actuation for reliable steering control</li>
                <li><strong>FEA Validated:</strong> Extensive load and dynamic calculations using Solidworks FEA and Ansys Mechanical</li>
                <li><strong>Autonomous-Optimized:</strong> Designed specifically for consistent performance required in autonomous operation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mounting System */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Sensor Mounting System</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Design Goal</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As part of our autonomous goal, our two main sources of data perception are the <strong className="text-white">RS-LiDAR-M1 sensor</strong> and 
                <strong className="text-white"> Intel RealSense D435i camera</strong>. For data calibration and data collection reasons, my goal was to create 
                a temporary mount that is to be used on the car.
              </p>
              
              <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
                <h4 className="text-lg font-semibold text-white mb-3">Key Requirements</h4>
                <ul className="text-gray-300 space-y-2 list-disc list-inside">
                  <li>Mount the camera and sensor as close as possible for calibration reasons</li>
                  <li>LiDAR can cause delay on image plane when experiencing abrupt motion</li>
                  <li>Designed a mount that would reduce motion artifacts using rubber isolator mounts</li>
                  <li>Create a steady and permanent mounting system for LiDAR and camera on the bodywork of the car</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.48 AM.png" 
                  alt="Mounting System" 
                  className="w-full rounded-lg mb-2"
                />
                <p className="text-xs text-gray-400 text-center">Sensor mounting system design</p>
              </div>
              <div className="bg-gray-900/30 rounded-lg p-4">
                <img 
                  src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.57 AM.png" 
                  alt="Vibration Isolation" 
                  className="w-full rounded-lg mb-2"
                />
                <p className="text-xs text-gray-400 text-center">Vibration isolation with rubber mounts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
          <ul className="text-gray-300 space-y-3 list-disc list-inside">
            <li>Optimized Steer-by-Wire system through extensive load and dynamic calculations</li>
            <li>BLDC motor + gearbox package providing 12+ Nm torque output</li>
            <li>Parallel secondary steering rack for reliable actuation</li>
            <li>Break pedal actuator with pressure-regulated and low power emergency braking</li>
            <li>Complete mounting system for automotive grade LiDAR sensors and cameras</li>
            <li>Precise positioning and vibration isolation for optimal sensor performance</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

