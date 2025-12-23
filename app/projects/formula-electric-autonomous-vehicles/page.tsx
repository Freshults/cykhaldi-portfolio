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

        {/* Autonomous Steering System */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Autonomous Steering System</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Dual Steering Rack Design</h3>
              <p className="text-gray-300 mb-4">
                The autonomous steering system utilizes a dual steering rack configuration with a BLDC motor and gearbox package 
                that actuates a parallel secondary steering rack. This design can handle at least 12 Nm of torque to actuate the 
                steering wheel, providing reliable and precise steering control for autonomous operation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Motor & Gearbox Package</h3>
              <p className="text-gray-300 mb-4">
                The system incorporates a BLDC motor paired with a gearbox to achieve the required torque output. The motor-gearbox 
                combination was carefully selected and integrated to meet the steering column criteria identified through extensive 
                load and dynamic calculations using Solidworks FEA and Ansys Mechanical.
              </p>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.28 AM.png" 
                alt="Steering System 1" 
                className="w-full rounded-lg max-h-96 object-contain"
              />
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.39 AM.png" 
                alt="Steering System 2" 
                className="w-full rounded-lg max-h-96 object-contain"
              />
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.48 AM.png" 
                alt="Steering System 3" 
                className="w-full rounded-lg max-h-96 object-contain"
              />
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.19.57 AM.png" 
                alt="Steering System 4" 
                className="w-full rounded-lg max-h-96 object-contain"
              />
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/Screenshot 2025-12-23 at 11.20.15 AM.png" 
                alt="Steering System 5" 
                className="w-full rounded-lg max-h-96 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Design Comparison */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Design Comparison: Belt Drive vs. Dual Steering Rack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Belt Drive Steering Column</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Uses a belt and pulley system to transfer motion</li>
                <li>Simpler mechanical design</li>
                <li>Potential for belt wear and slippage</li>
                <li>Lower torque capacity compared to direct drive</li>
                <li>Requires periodic maintenance</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Dual Steering Rack</h3>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Direct mechanical connection via parallel steering rack</li>
                <li>Higher reliability and precision</li>
                <li>No belt wear or slippage concerns</li>
                <li>Capable of handling 12+ Nm of torque</li>
                <li>Lower maintenance requirements</li>
                <li>Better suited for autonomous vehicle applications</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Design Decision</h3>
            <p className="text-gray-300">
              After extensive analysis using Solidworks FEA and Ansys Mechanical, the dual steering rack design was selected 
              for its superior reliability, torque capacity, and precision. This design choice ensures consistent steering performance 
              critical for autonomous vehicle operation, eliminating potential failure modes associated with belt drive systems.
            </p>
          </div>
        </div>

        {/* Additional Images from PDF */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Design Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'pdf_page_2_img_1.png',
              'pdf_page_4_img_2.png',
              'pdf_page_5_img_3.png',
              'pdf_page_5_img_4.png',
              'pdf_page_7_img_5.png',
              'pdf_page_8_img_6.png',
              'pdf_page_8_img_7.png',
              'pdf_page_9_img_8.png',
              'pdf_page_10_img_9.png',
              'pdf_page_10_img_10.png',
              'pdf_page_11_img_11.png',
              'pdf_page_12_img_12.png',
              'pdf_page_13_img_13.png',
              'pdf_page_13_img_14.png',
              'pdf_page_15_img_15.png',
              'pdf_page_15_img_16.png',
              'pdf_page_17_img_17.png',
              'pdf_page_17_img_18.png',
              'pdf_page_18_img_19.png',
              'pdf_page_18_img_20.png',
              'pdf_page_18_img_21.png',
              'pdf_page_19_img_22.png',
              'pdf_page_19_img_23.png',
              'pdf_page_20_img_24.png',
              'pdf_page_20_img_25.png',
            ].map((imgName, index) => (
              <img 
                key={index}
                src={`/formula-electric-autonomous-vehicles/autonomous-steering-system/${imgName}`}
                alt={`Design Documentation ${index + 1}`}
                className="w-full rounded-lg max-h-96 object-contain"
              />
            ))}
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

