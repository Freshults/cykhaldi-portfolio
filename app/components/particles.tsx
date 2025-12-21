'use client'

import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticleBackground() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    let isMounted = true
    initParticlesEngine(async (engine) => {
      await loadSlim(engine) // load slim bundle (no stars preset)
    }).then(() => {
      if (isMounted) setIsReady(true)
    })
    return () => {
      isMounted = false
    }
  }, [])

  if (!isReady) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          // keep the particle canvas transparent so particles render over the
          // page background rather than painting a filled box
          color: { value: 'transparent' },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 200,
            density: { enable: true,},
          },
          color: { value: '#64f4ac' }, // node color
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.8 },
          links: {
            enable: true,             // ✅ enables linkages
            color: '#64f4ac',
            distance: 200,            // length of links
            width: 3,                 // thickness of links
            opacity: 0.5,
          },
          move: {
            enable: true,
            speed: 1.2,
            outModes: { default: 'bounce' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            onClick: { enable: false, mode: 'push' },
          },
          modes: {
            repulse: { distance: 120 },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
      // place particles above the page background but underneath main content
      className="fixed inset-0 z-10 pointer-events-none"
    />
  )
}
