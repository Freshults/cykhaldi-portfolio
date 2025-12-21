'use client'

import { motion } from 'framer-motion'

interface FeaturedProjectCardProps {
  title: string
  category: string
  description: string
  technologies: string[]
  demoLink: string
  demoText?: string
  index?: number
  className?: string
  keyFeatures?: string[]
  featuresTitle?: string
  showCategoryBadge?: boolean
}

export function FeaturedProjectCard({
  title,
  category,
  description,
  technologies,
  demoLink,
  demoText = "Live Demo →",
  index = 0,
  className = "",
  keyFeatures = [],
  featuresTitle = "Key Features:",
  showCategoryBadge = true
}: FeaturedProjectCardProps) {
  const categoryColors = {
    'Full Stack': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    'AI/ML': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    'Data Science': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    'Design': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200'
  }

  const categoryColor = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'

  return (
    <motion.div
      className={`border border-neutral-800 rounded-lg p-6 transition-colors card-bg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, x: 5 }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
          >
            {demoText}
          </a>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
        
        {keyFeatures.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium text-neutral-800 dark:text-neutral-200">{featuresTitle}</h4>
            <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              {keyFeatures.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`${categoryColor} text-xs px-2 py-1 rounded`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
