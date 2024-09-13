'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ThemeToggler } from './theme-toggle'
import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' // Import icons for the hamburger menu

const navItems = {
  '/': {
    name: 'Home'
  },
  '/profile': {
    name: 'Profile'
  },
  '/projects': {
    name: 'Projects'
  },
  '/blog': {
    name: 'Blog'
  },
  '/contact': {
    name: 'Contact'
  }
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to control menu visibility
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='mb-10 mt-10 tracking-tight'>
      <div className='lg:sticky lg:top-20'>
        <LayoutGroup>
          <nav
            className='fade relative scroll-pr-6 px-0 pb-0 md:relative md:overflow-auto'
            id='nav'
          >
            <div className='flex w-full flex-row items-center justify-between'>
              {/* Hamburger Menu Icon for Mobile (Hidden on large screens) */}
              <div className='flex w-full items-center justify-between ml-3 lg:hidden'>
                <button
                  onClick={toggleMenu}
                  aria-label='Toggle menu'
                  className='p-2 text-2xl focus:outline-none'
                >
                  <HiMenu className='text-gray-900 dark:text-white' />
                </button>
                <ThemeToggler />
              </div>

              {/* Original Desktop Menu (Hidden on mobile screens) */}
              <div className='hidden w-full flex-row items-center justify-center lg:flex'>
                <div className='flex space-x-4'>
                  {Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={cn(
                          'flex rounded-md align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-50 dark:text-gray-300',
                          isActive
                            ? 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'
                            : 'text-neutral-500'
                        )}
                      >
                        <span className='relative px-2 py-1'>{name}</span>
                      </Link>
                    )
                  })}
                </div>

                <div className='ml-6'>
                  <ThemeToggler />
                </div>
              </div>
            </div>

            {/* Sidebar Overlay for Mobile */}
            {isMenuOpen && (
              <div className='fixed inset-0 z-50 flex w-full max-w-xs translate-x-0 transform flex-col space-y-4 bg-white p-6 shadow-lg transition-transform dark:bg-slate-900 lg:hidden'>
                {/* Close Icon inside the Sidebar */}
                <div className='flex justify-end'>
                  <button
                    onClick={toggleMenu}
                    aria-label='Close menu'
                    className='p-2 text-2xl focus:outline-none'
                  >
                    <HiX className='text-gray-900 dark:text-white' />
                  </button>
                </div>
                <div className='mt-4 flex flex-col space-y-2'>
                  {Object.entries(navItems).map(([path, { name }]) => {
                    const isActive = path === pathname
                    return (
                      <Link
                        key={path}
                        href={path}
                        className={cn(
                          'block rounded-md px-3 py-2 text-lg transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
                          isActive
                            ? 'bg-gray-200 text-black dark:bg-gray-600 dark:text-white'
                            : 'text-neutral-500'
                        )}
                        onClick={() => setIsMenuOpen(false)} // Close the menu on link click
                      >
                        {name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </nav>
        </LayoutGroup>
      </div>
    </header>
  )
}
