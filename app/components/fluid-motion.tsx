'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FluidMotionProps {
  children: ReactNode
  className?: string
}

export default function FluidMotion({ children, className = "" }: FluidMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for fluid motion
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredMotion({ children, className = "" }: FluidMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ children, className = "" }: FluidMotionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
}
