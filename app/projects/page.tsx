'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { ALL_PROJECTS } from '@/data/projects'
import { Input } from '@/components/ui/input'
import { SocialLink } from '@/components/social-link'
import { GitHubIcon, LinkIcon, YouTubeIcon } from '@/components/icons'
import { FiChevronDown, FiX } from 'react-icons/fi'
import Modal from '@/components/modal'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const categories = [
  'All Projects',
  'Web Apps',
  'Tools',
  'Frontend Projects',
  'Backend Projects',
  'Full-Stack Projects',
  'Academic/Research Projects',
  'Contributions/Open Source'
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

  const filterProjects = (category: string) => {
    if (category === 'All Projects') {
      return ALL_PROJECTS
    }
    return ALL_PROJECTS.filter(project => project.category === category)
  }

  const sortProjects = (
    projects: Array<{
      status: string
      title: string
      description: string
      repo?: string
      liveDemo?: string
      video?: string
    }>
  ) => {
    return projects.sort((a, b) => {
      if (a.status === 'Completed' && b.status !== 'Completed') return -1
      if (a.status !== 'Completed' && b.status === 'Completed') return 1
      return 0
    })
  }

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = filterProjects(selectedCategory).filter(
      project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return sortProjects(filtered)
  }, [selectedCategory, searchTerm])

  const openModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  // Handle arrow key navigation for categories
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setSelectedCategoryIndex(prevIndex =>
          prevIndex < categories.length - 1 ? prevIndex + 1 : prevIndex
        )
      }
      if (event.key === 'ArrowUp') {
        setSelectedCategoryIndex(prevIndex =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    setSelectedCategory(categories[selectedCategoryIndex])
  }, [selectedCategoryIndex])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscapeKey)
    } else {
      window.removeEventListener('keydown', handleEscapeKey)
    }

    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isModalOpen])

  return (
    <div className='flex min-h-screen flex-col rounded-lg lg:flex-row'>
      <aside className='w-full rounded-l-lg bg-gray-100 p-4 text-black dark:bg-slate-800 dark:text-white lg:min-h-screen lg:w-1/4 lg:p-6'>
        <h2 className='mb-6 hidden text-3xl font-semibold lg:block'>
          Categories
        </h2>

        <div className='mb-2 mt-2 block lg:hidden'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold'>{selectedCategory}</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center rounded-lg bg-gray-600 px-4 py-2 text-white'>
                  <FiChevronDown className='text-white' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-full'>
                {categories.map((category, idx) => (
                  <DropdownMenuItem
                    key={category}
                    onSelect={() => setSelectedCategory(category)}
                    className={`cursor-pointer rounded-lg px-4 py-2 ${
                      selectedCategory === category
                        ? 'bg-gray-600 text-white'
                        : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <ul className='hidden space-y-4 lg:block'>
          {categories.map((category, idx) => (
            <li
              key={category}
              className={`cursor-pointer rounded-3xl px-3 py-2 text-center ${
                selectedCategory === category
                  ? 'bg-gray-700 text-white'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      <main className='flex-1 rounded-r-lg bg-gray-50 p-4 text-black dark:bg-slate-900 dark:text-white lg:p-6'>
        <div className='mb-6 hidden items-center justify-between lg:flex'>
          <h2 className='text-2xl font-bold'>{selectedCategory}</h2>
          <div className='flex w-full items-center sm:w-1/2 lg:w-1/3'>
            <Input
              placeholder='Search projects...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='flex-grow dark:bg-slate-700 dark:text-white'
            />
            {searchTerm && (
              <Button
                onClick={clearSearch}
                className='ml-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500'
              >
                <FiX />
              </Button>
            )}
          </div>
        </div>

        {searchTerm && (
          <p className='mb-4 text-gray-600 dark:text-gray-400'>
            Searched for: "{searchTerm}"
          </p>
        )}

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2'>
          {filteredAndSortedProjects.map((project, idx) => (
            <div
              key={idx}
              className='flex transform cursor-pointer flex-col justify-between rounded-lg bg-white p-6 shadow-md transition-transform hover:scale-105 hover:bg-slate-300 hover:shadow-lg dark:bg-slate-800 dark:hover:bg-gray-600'
              onClick={() => openModal(project)}
            >
              <div>
                <div className='mb-2 flex items-center justify-between'>
                  <h3 className='text-xl font-semibold'>{project.title}</h3>
                  {project.status && (
                    <span
                      className={`rounded-2xl px-2 py-1 text-sm ${
                        project.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : project.status === 'In Progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  )}
                </div>
                <p className='mb-4 line-clamp-4 cursor-pointer overflow-hidden text-gray-600 dark:text-gray-400'>
                  {project.description}
                </p>
              </div>
              <div className='mt-4 flex justify-end space-x-2'>
                <a
                  href={project.repo ?? '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={e => e.stopPropagation()}
                >
                  <SocialLink
                    href={project.repo ?? '#'}
                    className='h-6 w-6'
                    icon={GitHubIcon}
                  />
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                  >
                    <SocialLink
                      href={project.liveDemo ?? '#'}
                      className='h-6 w-6'
                      icon={LinkIcon}
                    />
                  </a>
                )}
                {project.video && (
                  <a
                    href={project.video}
                    target='_blank'
                    rel='noopener noreferrer'
                    onClick={e => e.stopPropagation()}
                  >
                    <SocialLink
                      href={project.video}
                      className='h-6 w-6'
                      icon={YouTubeIcon}
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  )
}
