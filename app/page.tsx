'use client'

import { motion } from 'framer-motion'
import ParticleBackground from './components/particles'
import FluidMotion, { StaggeredMotion, StaggeredItem } from './components/fluid-motion'
import { FeaturedProjectCard } from './components/featured-project-card'

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <ParticleBackground />
      
      {/* Main Content */}
      <section className="relative z-20 space-y-8 p-2 md:p-4">
        {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 space-y-4">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex-shrink-0 relative w-48 h-60 md:w-56 md:h-72"
            >
              {/* Puzzle Piece Rendering */}
              <div className="absolute inset-0 grid grid-cols-16 grid-rows-20 gap-0.5 z-10">
                {Array.from({ length: 320 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="bg-black border border-gray-600"
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: i * 0.0045,
                      duration: 0.05,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
              
              {/* Pixelated Rendering Text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-30"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <div className="text-white text-lg font-mono tracking-wider" style={{fontFamily: 'monospace', fontSize: '14px', letterSpacing: '2px'}}>
                  RENDERING IMAGE...
                </div>
              </motion.div>
              
              {/* ASCII Progress Bar */}
              <motion.div
                className="absolute bottom-1 left-1 text-xs text-white font-mono z-20"
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              >
                <motion.div
                  className="w-32 h-1 bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.4, ease: "linear" }}
                />
              </motion.div>
              
              {/* Final Image with Scan Lines */}
              <motion.div
                className="w-full h-full relative z-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.3 }}
              >
                <img 
                  src="/cropped_ID.PNG" 
                  alt="Cy R. Khaldi" 
                  className="w-full h-full object-contain"
                />
                {/* Scan Lines Effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="w-full h-px bg-white/20 animate-pulse"></div>
                  <div className="w-full h-px bg-white/10 animate-pulse" style={{animationDelay: '0.5s', top: '50%'}}></div>
                </div>
              </motion.div>
            </motion.div>

            {/* Name and Contact Info */}
            <div className="space-y-4 flex-1">
              <motion.h1 
                className="text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Cy R. Khaldi
              </motion.h1>
              <motion.div           
                className="tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="text-white space-y-1">
                  <p>Berkeley, CA | cykhaldi@berkeley.edu | (424) 468-9165 | <a href="https://www.linkedin.com/in/cykhaldi" className="text-white hover:text-gray-300">linkedin.com/in/cykhaldi</a></p>
                </div>
              </motion.div>
            </div>
          </div>

      {/* Education */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-neutral-200 dark:border-neutral-700 pb-2">EDUCATION & COURSEWORK</h2>
            <div className="space-y-2">
              <div className="font-semibold text-xl">University of California, Berkeley</div>
              {/* <div className="text-neutral-600 dark:text-neutral-400">Expected Graduation: May 2026</div> */}
              <div className="text-white">B.S. in Mechanical Engineering | Aug 2022 – May 2026</div>
              <div className="text-white">Major GPA: 3.8/4.0</div>
              <div className="text-sm text-white">
                Relevant Coursework: Mechatronics Design, Engineering Mechanics II, MEMS Design, Solid Mechanics, Heat Transfer, Fluid Mechanics, Electronics/IoT, Dynamic Systems and Feedback, Behavior of Engineering Materials
              </div>
              {/* <div className="text-sm text-neutral-600 dark:text-neutral-400">
                Relevant Coursework: Data Engineering, Artificial Intelligence, Data Structures & Algorithms, Principles & Techniques of Data Science, Probability for Data Science
              </div> */}
            </div>
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Work Experience */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-neutral-200 dark:border-neutral-700 pb-2">WORK EXPERIENCE</h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-4 rounded-lg hover:bg-black/20 dark:hover:bg-black/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">Tesla | Incoming Mechanical & Thermal Design Engineer Intern</div>
                  <div className="text-white text-sm">Jan 2026 – May 2026</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Palo Alto, CA</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-white">
                  <li>Internship offer accepted; start date January 20, 2026</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-4 rounded-lg hover:bg-black/20 dark:hover:bg-black/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">NVIDIA | Product Design Engineer - Thermal</div>
                  <div className="text-white text-sm">May 2025 – Aug 2025</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Santa Clara, CA</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-white">
                  <li>Pioneered & patented a novel liquid-cooled busbar architecture, advancing data center thermal management solutions</li>
                  <li>Performed steady state thermal simulations through ANSYS Icepak to predict hotspot formation and validate cooling performance at operating busbar temperatures up to 105 °C</li>
                  <li>Executed structural FEA on bent copper coolant pipes to determine appropriate number of support brackets counteracting spring-back and established minimum wall thicknesses to prevent collapse under operational loads</li>
                  <li>Designed 3D CAD custom busbar models and liquid channel geometries in Creo, integrating copper coolant pipes with rack-level manifolds while considering pressure drop budget for thermal system</li>
                  <li>Created tolerance stack-ups to determine appropriate thermal interface material thickness for optimal heat transfer</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-4 rounded-lg hover:bg-black/20 dark:hover:bg-black/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">Lawrence Berkeley National Laboratory | Mechanical/Thermal Design Research Intern</div>
                  <div className="text-white text-sm">Jun 2024 – Nov 2024</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Berkeley, CA - Thermal Energy Group</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-white">
                  <li>Contributed to the fabrication and testing of a prototype non-volatile thermal switch device using current actuated shape memory alloy wires, achieving a bi-stable mechanism that reduces HVAC system energy consumption</li>
                  <li>Developed an aluminum–Teflon composite PCM enclosure with a precision pneumatic cylinder interface to manage volumetric expansion and minimize structural gaps during phase transitions</li>
                  <li>Integrated phase change material (PCM) within a thermal switch stack prototype to maximize utilization of ambient heating and cooling, resulting in up to 76% reduction in cooling loads for climate zones</li>
                  <li>Created and iterated 4 parametric CAD models of aluminum stencil geometries, evaluating thermal conductivity, diffusion behavior, and manufacturability to improve composite energy density by 25%</li>
                  <li>Conducted tolerance stack-up and dimensional analysis to ensure precision manufacturing of composite stencils, validating ±0.05 mm accuracy for reliable large-scale assembly</li>
                </ul>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-4 rounded-lg hover:bg-black/20 dark:hover:bg-black/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="font-semibold">Formula Electric at Berkeley | Autonomous Vehicles Hardware Engineer</div>
                  <div className="text-white text-sm">Sep 2023 – Jan 2025</div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="font-thin">Berkeley, CA - Student Racing Team</div>
                </div>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-white">
                  <li>Optimized the Steer-by-Wire system of our second-generation vehicle by identifying key steering column criteria through extensive load and dynamic calculations using Solidworks FEA and Ansys Mechanical</li>
                  <li>Pioneered a BLDC motor + gearbox package actuating a parallel secondary steering rack that could handle at least 12 Nm of torque to actuate the steering wheel</li>
                  <li>Designed a break pedal actuator capable of pressure-regulated and low power emergency braking for autonomous vehicle safety systems</li>
                  <li>Engineered a complete mounting system for automotive grade LiDAR sensors and cameras, ensuring precise positioning and vibration isolation for optimal sensor performance</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>

      {/* Skills & Interests */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-neutral-200 dark:border-neutral-700 pb-2">SKILLS & INTERESTS</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg border-2 border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-cyan-400 mb-3">CAD & Simulation</h3>
                <div className="flex flex-wrap gap-2">
                  {["SOLIDWORKS", "Fusion 360", "Creo", "ANSYS Icepak", "SOLIDWORKS FEA", "CFD"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-cyan-400/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg border-2 border-green-400/30 bg-green-500/10 hover:bg-green-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-green-400 mb-3">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "MATLAB", "C/C++", "Excel", "Simulink"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-green-400/20 text-green-300 text-sm rounded-full border border-green-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg border-2 border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-purple-400 mb-3">Manufacturing</h3>
                <div className="flex flex-wrap gap-2">
                  {["Machining", "Subtractive Manufacturing", "3D-Printing"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-400/20 text-purple-300 text-sm rounded-full border border-purple-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-lg border-2 border-orange-400/30 bg-orange-500/10 hover:bg-orange-500/20 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-orange-400 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["English (Fluent)", "Arabic (Fluent)", "French (Limited)"].map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-orange-400/20 text-orange-300 text-sm rounded-full border border-orange-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>
      {/* Featured Projects Section */}
      <StaggeredMotion>
        <StaggeredItem>
          <motion.div
            className="my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 id="featured-projects" className="text-2xl font-semibold mb-4 border-b-2 border-neutral-200 dark:border-neutral-700 pb-2">FEATURED PROJECTS</h2>
            <div className="space-y-6">
              <FeaturedProjectCard
                title="Formula Electric at Berkeley - Autonomous Vehicles"
                category="Automotive Engineering"
                description="Hardware engineering for autonomous electric vehicle systems including Steer-by-Wire and Brake-by-Wire systems with BLDC motor actuation and LiDAR sensor integration."
                technologies={["SOLIDWORKS", "ANSYS FEA", "BLDC Motors", "LiDAR", "Automotive Systems"]}
                demoLink="/projects/formula-electric-autonomous-vehicles"
                demoText="Open Project →"
                index={0}
              />

              <FeaturedProjectCard
                title="Automatic T-shirt Folder"
                category="Mechatronics Design"
                description="An automated T-shirt folding system designed and built for ME 102B, featuring servo motors, DC motor control, ultrasonic sensors, and Arduino-based automation."
                technologies={["Arduino", "ESP32", "Servo Motors", "DC Motors", "PID Control", "Mechatronics"]}
                demoLink="/projects/automatic-t-shirt-folder"
                demoText="Open Project →"
                index={1}
              />

              <FeaturedProjectCard
                title="Pneumatic Seat Lift"
                category="Mechanical Design"
                description="Designed and manufactured a seat accessory that gently lowers or raises users using gas springs, rated to handle up to 1000 N of force with precision machining."
                technologies={["SOLIDWORKS", "Gas Springs", "Machining", "Sheet Metal", "Precision Design"]}
                demoLink="/projects/pneumatic-seat-lift"
                demoText="Open Project →"
                index={2}
              />

              <FeaturedProjectCard
                title="Anti Bike Theft System"
                category="Security Systems"
                description="An innovative anti-theft system designed to protect bicycles from theft using advanced security mechanisms that combine mechanical and electronic components for robust protection."
                technologies={["Electronics", "Sensor Integration", "Mobile App Development", "Mechanical Design", "CAD Modeling", "Prototyping", "Embedded Systems"]}
                demoLink="/projects/anti-bike-theft-system"
                demoText="Open Project →"
                index={3}
              />
            </div>
          </motion.div>
        </StaggeredItem>
      </StaggeredMotion>
    </section>
    </div>
  )
}
