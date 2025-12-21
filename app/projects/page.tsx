import React from 'react'
import ParticlesWrapper from './ParticlesWrapper'
import { FeaturedProjectCard } from '../components/featured-project-card'

export const metadata = {
  title: 'Projects',
  description: 'Explore Cy R. Khaldi\'s engineering projects and portfolio.',
}

export default function Page() {
  return (
    <section className="relative space-y-8">
      <ParticlesWrapper />
      <h1 className="font-semibold text-3xl mb-8 tracking-tight text-white">My Projects</h1>
    </section>
  )
}
