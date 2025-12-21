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
                      The Anti Bike Theft System is an innovative security solution designed to protect bicycles from theft. 
                      This project addresses the growing concern of bicycle theft by implementing a comprehensive security mechanism 
                      that combines mechanical and electronic components to provide robust protection for bicycles.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Problem Statement</h3>
                    <p className="text-gray-300">
                      Bicycle theft is a significant problem in urban areas, with millions of bicycles stolen each year worldwide. 
                      Traditional locks are often vulnerable to cutting, picking, or brute force attacks. We developed a comprehensive 
                      anti-theft system that offers enhanced security through multiple layers of protection, including mechanical 
                      locking mechanisms and electronic monitoring capabilities.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Design and Functionality</h3>
                    <p className="text-gray-300 mb-3">
                      The system integrates multiple security features to provide comprehensive bicycle protection. The design combines 
                      durable mechanical components with smart electronic systems to create a multi-layered defense against theft attempts.
                    </p>
                    <ul className="text-gray-300 space-y-1">
                      <li><strong>Mechanical Locking:</strong> Reinforced locking mechanism resistant to cutting and picking</li>
                      <li><strong>Electronic Monitoring:</strong> Integrated sensors and alarms for unauthorized access detection</li>
                      <li><strong>Mobile Integration:</strong> Smart connectivity features for remote monitoring and alerts</li>
                      <li><strong>Durable Construction:</strong> Weather-resistant materials designed for outdoor use</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Key Features and Benefits</h3>
                    <p className="text-gray-300 mb-3">The Anti Bike Theft System provides:</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• <strong>Multi-layer security</strong> — mechanical and electronic protection</li>
                      <li>• <strong>Real-time alerts</strong> — instant notification of security breaches</li>
                      <li>• <strong>Easy installation</strong> — user-friendly setup and mounting</li>
                      <li>• <strong>Weather resistance</strong> — designed to withstand outdoor conditions</li>
                      <li>• <strong>Battery efficiency</strong> — long-lasting power management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Key Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🔒</span>
                    <span>Reinforced mechanical locking mechanism</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">📱</span>
                    <span>Smart mobile app integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🚨</span>
                    <span>Real-time security alerts and notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">⚡</span>
                    <span>Low-power electronics for extended battery life</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">🌧️</span>
                    <span>Weather-resistant housing and components</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Technologies & Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Electronics", "Sensor Integration", "Mobile App Development", "Mechanical Design", "CAD Modeling", "Prototyping", "Embedded Systems", "Security Systems"].map((tech) => (
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

