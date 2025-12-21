import React from 'react'
import ParticlesWrapper from '../ParticlesWrapper'

export const metadata = {
  title: 'Pneumatic Seat Lift - Cy R. Khaldi',
  description: 'Mechanical engineering project: Designed and manufactured a seat accessory using gas springs for accessibility applications.',
}

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      <h1 className="font-semibold text-3xl mb-8 tracking-tight text-white">Pneumatic Seat Lift</h1>
      
      {/* Project Overview */}
      <div className="space-y-6">
        <div className="bg-gray-800/20 border border-gray-600/30 rounded-xl p-8">
          <div className="flex flex-col space-y-8">
            {/* Project Info */}
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Pneumatic Seat Lift</h2>
                <p className="text-blue-200 text-lg">Mechanical Engineering Project</p>
                
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                    <p className="text-gray-300">
                      The Pneumatic Seat Lift is a prototype designed to assist individuals with limited mobility in transitioning between sitting and standing. 
                      Our goal was to bridge the gap between high-cost powered recliners and static chairs by developing an affordable, portable, and power-free lifting solution. 
                      The device uses a gas-spring mechanism capable of supporting up to 70% of a user's body weight, significantly reducing the physical effort required to stand.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Problem Statement</h3>
                    <p className="text-gray-300">
                      More than half of the global elderly population (ages 65+) experiences mobility impairments that make basic movements—such as sitting or standing—painful or strenuous. 
                      Existing assistive products are often bulky, expensive, or dependent on electrical power. We sought to design a compact and user-friendly alternative that restores independence for users who can walk but struggle with lifting themselves from seated positions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Design and Functionality</h3>
                    <p className="text-gray-300 mb-3">
                      The system consists of a rigid seating surface mounted above a sheet-metal base tray housing the pneumatic mechanism. When the user sits, the gas spring compresses, absorbing load and controlling descent. Upon standing, stored potential energy in the gas spring releases to gently elevate the seat, assisting the user's upward motion.
                    </p>
                    <ul className="text-gray-300 space-y-1">
                      <li><strong>Materials:</strong> Aluminum 3003 sheet for formability, Aluminum 6061 for support struts</li>
                      <li><strong>Manufacturing:</strong> Waterjet cutting, sheet-metal bending, and precision pin assembly</li>
                      <li><strong>Components:</strong> Gas spring (McMaster-Carr 4138T119 or higher-force variant) mounted with welded or epoxied tabs for stability</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Differentiation and Impact</h3>
                    <p className="text-gray-300 mb-3">Compared to conventional lift chairs, the Pneumatic Seat Lift offers:</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• <strong>No electrical power required</strong> — entirely pneumatic operation</li>
                      <li>• <strong>High portability</strong> — lightweight aluminum design</li>
                      <li>• <strong>Low cost</strong> — manufacturable with accessible materials and processes</li>
                      <li>• <strong>High stability and minimal required strength</strong> — supports up to 70% of user weight</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">⚙️</span>
                    <span>Gas spring actuation system for smooth motion control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">💪</span>
                    <span>Rated for 1000 N force capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🎯</span>
                    <span>Datum-based modeling for precision manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🔧</span>
                    <span>Custom machined components with tight tolerances</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["SolidWorks", "CAD Modeling", "FEA Analysis", "Machining", "Mill-Lathe", "Laser Cutting", "Sheet Metal Bending", "Tolerance Analysis"].map((tech) => (
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
                      src="/e29-project/Screenshot 2025-10-06 121004.png" 
                      alt="Pneumatic Seat Lift - Assembly View"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/e29-project/Screenshot 2025-10-06 121130.png" 
                      alt="Pneumatic Seat Lift - Design Analysis"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/e29-project/Screenshot 2025-10-06 121200.png" 
                      alt="Pneumatic Seat Lift - Component Detail"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-4 border border-gray-600/30">
                    <img 
                      src="/e29-project/Screenshot 2025-10-06 121350.png" 
                      alt="Pneumatic Seat Lift - Manufacturing"
                      className="w-full h-80 object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Drawings - Full Width */}
            <div className="w-full">
              <h4 className="text-xl font-semibold text-white mb-6">Technical Drawings</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gray-800/20 rounded-lg p-6 border border-gray-600/30">
                  <h5 className="text-white font-semibold mb-4 text-lg">Sitting Surface</h5>
                  <iframe 
                    src="/e29-project/SittingSurface.pdf" 
                    className="w-full h-[600px] border border-gray-600/30 rounded"
                    title="Sitting Surface Technical Drawing"
                  />
                </div>
                
                <div className="bg-gray-800/20 rounded-lg p-6 border border-gray-600/30">
                  <h5 className="text-white font-semibold mb-4 text-lg">Spring Eyelet</h5>
                  <iframe 
                    src="/e29-project/Spring eyelet.pdf" 
                    className="w-full h-[600px] border border-gray-600/30 rounded"
                    title="Spring Eyelet Technical Drawing"
                  />
                </div>
                
                <div className="bg-gray-800/20 rounded-lg p-6 border border-gray-600/30">
                  <h5 className="text-white font-semibold mb-4 text-lg">Steel Tray</h5>
                  <iframe 
                    src="/e29-project/SteelTray.pdf" 
                    className="w-full h-[600px] border border-gray-600/30 rounded"
                    title="Steel Tray Technical Drawing"
                  />
                </div>
                
                <div className="bg-gray-800/20 rounded-lg p-6 border border-gray-600/30">
                  <h5 className="text-white font-semibold mb-4 text-lg">U-Bracket</h5>
                  <iframe 
                    src="/e29-project/U-Bracket.pdf" 
                    className="w-full h-[600px] border border-gray-600/30 rounded"
                    title="U-Bracket Technical Drawing"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
