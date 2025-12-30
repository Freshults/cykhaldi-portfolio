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
      
      {/* Content will be added step by step */}
      <div className="space-y-6">
        {/* Introduction */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              As an autonomous hardware engineer for Formula Electric at Berkeley, I worked on designing the Steer-by-Wire (SBW) system for the team's first autonomous vehicle. The goal was to develop a completely independent steering system that could reliably actuate the vehicle's steering mechanism for autonomous operation.
            </p>
            
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Design Criteria: Best Place to Rotate Steering Column</h3>
              <p className="text-gray-300 mb-4">
                Before designing the SBW system, I evaluated critical factors to determine the optimal location for steering column actuation:
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Can handle required load</li>
                <li>Can fit decently sized motor</li>
                <li>Will not interfere with driver</li>
              </ul>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Through this evaluation process, I developed and analyzed two distinct approaches: a <strong className="text-white">belt-driven steering column</strong> system and a <strong className="text-white">dual steering rack</strong> configuration. Each approach offered unique advantages and trade-offs for autonomous vehicle applications.
            </p>
          </div>
        </div>

        {/* Steering Calculations */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Steering Calculations</h2>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              To determine the required torque for the steering system, I performed hand calculations starting from vehicle weight and working through the force chain to the steering pinion.
            </p>
            
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">Actuation Time Requirements</h3>
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
            
            <div className="bg-gray-800/50 rounded-lg p-4">
              <img 
                src="/formula-electric-autonomous-vehicles/autonomous-steering-system/steering-calculations-hand-calc.png" 
                alt="Hand calculations for required steering torque" 
                className="w-full max-w-2xl mx-auto rounded-lg mb-3"
              />
              <p className="text-sm text-gray-400 text-center">Hand calculations for the required torque for steering</p>
            </div>
          </div>
        </div>

        {/* Steer-By-Wire */}
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Steer-By-Wire</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-4">Proposed Solution</h3>
              <p className="text-gray-300 mb-4">
                Power intermediate steering shaft through belt/gear driven design
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-semibold text-blue-300 mb-3">Pros</h4>
                  <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li>Simple module</li>
                    <li>Can be placed anywhere on the shaft</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-md font-semibold text-yellow-300 mb-3">Issues</h4>
                  <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li>Requires space in front/behind steering column</li>
                    <li>Separate battery needed</li>
                    <li>Needed a motor that would produce ~10 Nm of torque</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Design Sketches */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Design Sketches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <img 
                    src="/formula-electric-autonomous-vehicles/autonomous-steering-system/sketch-1.png" 
                    alt="Belt-driven steering column design sketch 1" 
                    className="w-full rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-400 text-center">Sketch 1</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <img 
                    src="/formula-electric-autonomous-vehicles/autonomous-steering-system/sketch-2.png" 
                    alt="Belt-driven steering column design sketch 2" 
                    className="w-full rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-400 text-center">Sketch 2</p>
                </div>
              </div>
            </div>

            {/* Belt Drive Specifications */}
            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Belt Drive</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li>33t → 55t Gear</li>
                    <li>1.5 Ratio</li>
                    <li>GT2 Belts (6mm width)</li>
                    <li>10 Nm Stepper w/ encoder</li>
                  </ul>
                </div>
                
                <div>
                  <ul className="text-gray-300 space-y-2 text-sm list-disc list-inside">
                    <li>Motor Mount: 0.1 inch Steel</li>
                    <li>FoS = 1.4</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                <h4 className="text-md font-semibold text-blue-300 mb-3">Parts</h4>
                <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                  <li>NEMA 34 Stepper motor</li>
                  <li>Large pulley gear</li>
                  <li>Small pulley gear</li>
                  <li>X4 M5 Socket head bolts</li>
                  <li>Washer (Hi-Collar lock washer)</li>
                  <li>Steel sheet for motor mount</li>
                  <li>Shaft collar for gears</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="text-md font-semibold text-yellow-300 mb-3">Future Work</h4>
                <ul className="text-gray-300 space-y-1 text-sm list-disc list-inside">
                  <li>How to secure timing pulleys to steering column</li>
                  <li>Slots for Belt tensioning</li>
                  <li>How to manufacture timing pulleys</li>
                </ul>
              </div>
            </div>

            {/* Finalized Design Images */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Finalized Steering System Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <img 
                    src="/formula-electric-autonomous-vehicles/autonomous-steering-system/auto-steering-system-1.png" 
                    alt="Finalized steering system design 1" 
                    className="w-full rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-400 text-center">Finalized steering system design</p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <img 
                    src="/formula-electric-autonomous-vehicles/autonomous-steering-system/auto-steering-system-2.png" 
                    alt="Finalized steering system design 2" 
                    className="w-full rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-400 text-center">Finalized steering system design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
