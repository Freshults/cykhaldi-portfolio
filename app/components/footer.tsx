'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="mb-16">
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {year} Cy R. Khaldi
      </p>
    </footer>
  )
}
