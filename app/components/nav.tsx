'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'

const navItems = {
  '/': {
    name: 'home',
  },
  '#featured-projects': {
    name: 'projects',
  },
}

export function Navbar() {
  const pathname = usePathname()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    // Handle scroll to section for projects
    if (targetPath === '#featured-projects') {
      e.preventDefault()
      const element = document.getElementById('featured-projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return false
    }
    return true
  }, [pathname])

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path || (path === '#featured-projects' && pathname === '/')
              
              return (
                <Link
                  key={path}
                  href={path}
                  onClick={(e) => handleNavClick(e, path)}
                  className={`transition-all flex align-middle relative py-1 px-2 m-1 ${
                    isActive 
                      ? 'text-neutral-500 dark:text-neutral-400 cursor-default select-none' 
                      : 'hover:text-neutral-800 dark:hover:text-neutral-200 cursor-pointer'
                  }`}
                  style={{
                    pointerEvents: 'auto'
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={isActive ? -1 : 0}
                >
                  {name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-2 right-2 h-0.5 bg-neutral-400 dark:bg-neutral-500 rounded-full" />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
