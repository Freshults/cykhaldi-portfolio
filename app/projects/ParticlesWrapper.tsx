'use client'

import { useEffect, useState } from 'react'
import ParticleBackground from '../components/particles'

export default function ParticlesWrapper() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10">
      <ParticleBackground />
    </div>
  )
}


