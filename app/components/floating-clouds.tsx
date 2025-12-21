'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CloudProps {
  delay: number
  duration: number
  x: number
  y: number
  size: number
  opacity: number
}

function Cloud({ delay, duration, x, y, size, opacity }: CloudProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size * 0.6}px`,
        opacity,
      }}
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { duration: 0.3, ease: "easeOut" },
        y: { duration: 0.3, ease: "easeOut" },
        scale: { duration: duration, repeat: Infinity, delay },
      }}
    >
      <svg
        viewBox="0 0 100 60"
        className="w-full h-full"
        fill="currentColor"
        style={{ color: 'rgba(148, 163, 184, 0.3)' }}
      >
        <path d="M20,30 Q10,20 20,20 Q30,10 40,20 Q50,10 60,20 Q70,10 80,20 Q90,20 80,30 Q90,40 80,40 Q70,50 60,40 Q50,50 40,40 Q30,50 20,40 Q10,40 20,30 Z" />
      </svg>
    </motion.div>
  )
}

export default function FloatingClouds() {
  const clouds = [
    { delay: 0, duration: 8, x: 10, y: 20, size: 80, opacity: 0.4 },
    { delay: 2, duration: 12, x: 70, y: 10, size: 120, opacity: 0.3 },
    { delay: 4, duration: 10, x: 30, y: 60, size: 100, opacity: 0.35 },
    { delay: 1, duration: 15, x: 80, y: 50, size: 90, opacity: 0.25 },
    { delay: 3, duration: 9, x: 15, y: 70, size: 70, opacity: 0.3 },
    { delay: 5, duration: 11, x: 60, y: 80, size: 110, opacity: 0.2 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {clouds.map((cloud, index) => (
        <Cloud key={index} {...cloud} />
      ))}
    </div>
  )
}
