import React from 'react'

// Define the types for project and modal props
interface Project {
  title: string
  status?: string
  repo?: string
  video?: string
  liveDemo?: string // Changed from 'external' to 'liveDemo' for consistency
  description?: string
  tags?: string[]
  features?: string[]
  frontend?: string[]
  backend?: string[]
  devOps?: string[]
  complexity?: string
  lastUpdated?: string
  license?: string
}

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4'
      onClick={onClose} // Close modal when clicking the backdrop
    >
      <div
        className='relative max-h-[90vh] w-full max-w-md overflow-auto rounded-lg bg-white p-4 dark:bg-gray-800 sm:max-w-lg md:max-w-2xl'
        onClick={e => e.stopPropagation()} // Prevent click inside modal from closing it
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute right-2 top-2 text-xl text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white sm:text-2xl'
        >
          &times;
        </button>

        {/* Project Title and Status */}
        <div className='mb-4 flex flex-col items-start justify-between sm:flex-row sm:items-center'>
          <h2 className='text-lg font-bold sm:text-xl md:text-2xl'>
            {project.title}
          </h2>
          {project.status && (
            <span
              className={`mr-4 mt-2 rounded-2xl px-2 py-1 text-xs sm:mt-0 sm:text-sm md:text-base ${
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

        {/* Project Links (GitHub, Demo, Video) */}
        <div className='mb-4 flex justify-center space-x-2 sm:justify-start'>
          {project.repo && (
            <a href={project.repo} target='_blank' rel='noopener noreferrer'>
              <button className='rounded-md bg-gray-800 px-3 py-1 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 dark:focus:ring-gray-400'>
                GitHub
              </button>
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-300 dark:text-blue-900 dark:hover:bg-blue-400 dark:focus:ring-blue-500'>
                Demo
              </button>
            </a>
          )}
          {project.video && (
            <a href={project.video} target='_blank' rel='noopener noreferrer'>
              <button className='rounded-md bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-300 dark:text-red-900 dark:hover:bg-red-400 dark:focus:ring-red-500'>
                Video
              </button>
            </a>
          )}
        </div>

        {/* Project Description */}
        {project.description && (
          <p className='mb-4 text-sm text-gray-700 dark:text-gray-300 sm:text-base md:text-lg'>
            {project.description}
          </p>
        )}

        {/* Tags */}
        {project.tags && (
          <div className='mb-4'>
            <h3 className='mb-2 text-sm font-semibold sm:text-base'>
              Technologies:
            </h3>
            <div className='flex flex-wrap gap-2'>
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-800 dark:bg-blue-800 dark:text-blue-100 sm:text-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && (
          <div className='mb-4'>
            <h3 className='mb-2 text-sm font-semibold sm:text-base'>
              Key Features:
            </h3>
            <ul className='list-inside list-disc space-y-2 text-sm text-gray-700 dark:text-gray-300 sm:text-base'>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Frontend, Backend, DevOps
        <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {project.frontend && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                Frontend:
              </h3>
              <div className='space-y-1'>
                {project.frontend.map((tech, idx) => (
                  <span
                    key={idx}
                    className='block rounded-md bg-purple-100 px-3 py-1 text-xs text-purple-800 dark:bg-purple-800 dark:text-purple-100 sm:text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.backend && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                Backend:
              </h3>
              <div className='space-y-1'>
                {project.backend.map((tech, idx) => (
                  <span
                    key={idx}
                    className='block rounded-md bg-green-100 px-3 py-1 text-xs text-green-800 dark:bg-green-800 dark:text-green-100 sm:text-sm'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.devOps && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                DevOps:
              </h3>
              <div className='space-y-1'>
                {project.devOps.map((tool, idx) => (
                  <span
                    key={idx}
                    className='block rounded-md bg-yellow-100 px-3 py-1 text-xs text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 sm:text-sm'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div> */}

        {/* Complexity, Last Updated, License */}
        <div className='mb-4 grid grid-cols-1 gap-4 sm:grid-cols-3'>
          {project.complexity && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                Complexity:
              </h3>
              <p className='text-sm text-gray-700 dark:text-gray-300 sm:text-base'>
                {project.complexity}
              </p>
            </div>
          )}

          {project.lastUpdated && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                Last Updated:
              </h3>
              <p className='text-sm text-gray-700 dark:text-gray-300 sm:text-base'>
                {project.lastUpdated}
              </p>
            </div>
          )}

          {project.license && (
            <div>
              <h3 className='mb-2 text-sm font-semibold sm:text-base'>
                License:
              </h3>
              <p className='text-sm text-gray-700 dark:text-gray-300 sm:text-base'>
                {project.license}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
