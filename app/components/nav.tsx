'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
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
  const router = useRouter()

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetPath: string) => {
    // Handle scroll to section for projects
    if (targetPath === '#featured-projects') {
      e.preventDefault()
      
      // If we're on a different page, navigate to home with hash
      if (pathname !== '/') {
        router.push('/#featured-projects')
        // Use multiple timeouts to ensure scroll happens after page loads
        setTimeout(() => {
          const element = document.getElementById('featured-projects')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
        setTimeout(() => {
          const element = document.getElementById('featured-projects')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 500)
        return false
      }
      
      // If we're already on home, just scroll
      const element = document.getElementById('featured-projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      return false
    }
    return true
  }, [pathname, router])

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 relative">
            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = pathname === path || (path === '#featured-projects' && pathname === '/')
              const isProjects = path === '#featured-projects'
              
              return (
                <div key={path} className="relative">
                <Link
                  href={isProjects && pathname !== '/' ? '/#featured-projects' : path}
                  onClick={(e) => handleNavClick(e, path)}
                  className={`transition-all duration-200 flex align-middle relative py-1 px-2 m-1 ${
                    isActive 
                      ? 'text-neutral-500 dark:text-neutral-400 cursor-default select-none' 
                      : 'text-neutral-400 dark:text-neutral-500 hover:text-white dark:hover:text-white hover:scale-110 cursor-pointer'
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
                  
                  {/* Arrow pointing to projects link - hidden on mobile */}
                  {isProjects && pathname === '/' && (
                    <div className="hidden md:flex absolute left-full top-1/2 -translate-y-1/2 ml-1 items-center pointer-events-none z-[100]" style={{ marginTop: '3px' }}>
                      <style jsx>{`
                        @keyframes pointArrow {
                          0%, 100% {
                            transform: translateX(3px) scaleX(-1);
                          }
                          50% {
                            transform: translateX(-3px) scaleX(-1);
                          }
                        }
                        .pointing-arrow {
                          animation: pointArrow 1.5s ease-in-out infinite;
                        }
                      `}</style>
                      {/* Horizontal Arrow pointing left towards projects link */}
                      <svg 
                        className="w-24 h-8 text-blue-600 dark:text-blue-500 pointing-arrow" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        viewBox="0 0 24 24"
                      >
                        {/* White outline */}
                        <line x1="1" y1="13" x2="40" y2="13" stroke="white" strokeWidth="5"></line>
                        <polyline points="25 2 41 13 25 22" stroke="white" strokeWidth="5"></polyline>
                        {/* Blue arrow on top */}
                        <line x1="1" y1="13" x2="40" y2="13" stroke="currentColor" strokeWidth="3"></line>
                        <polyline points="25 2 41 13 25 22" stroke="currentColor" strokeWidth="3"></polyline>
                      </svg>
                      {/* Tooltip */}
                      <div className="ml-2 whitespace-nowrap bg-blue-500 dark:bg-blue-600 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg">
                        Click here to view my projects
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
