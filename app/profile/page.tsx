'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const sections = {
  summary: 'Summary',
  experience: 'Experience',
  education: 'Education',
  skills: 'Skills',
  certifications: 'Certifications',
  awards: 'Honors & Awards',
  status: 'Status'
}

const details = {
  summary: (
    <div>
      <p className='mb-4 text-xl font-bold'>
        Chandrasekaraa Ramadoss Ganesh (He/Him)
      </p>
      <p className='mb-4 font-semibold'>
        Recent IT Graduate | Eager Full Stack Developer | Seeking Opportunities
        in Software Development
      </p>
      <p>
        As a recent Master of Information Technology graduate from QUT, my
        passion for software development has been channeled into creating
        impactful solutions, exemplified by my role at Trusted Networks Lab,
        where I spearheaded the development of a prototype tool hosted on AWS.
        My work at ClubSeeker further demonstrates my full-stack development
        skills, using the MERN stack to deliver a responsive PaaS platform that
        elevates club management experiences. My dedication to innovation and
        security in software is underscored by a Best Paper Award for my project
        "Guardify."
      </p>
    </div>
  ),
  experience: (
    <div>
      <h3 className='mb-2 text-lg font-bold'>
        Software Engineer - LIFESHAPE CLINIC (APRIL 2023 - PRESENT)
      </h3>
      <p className='mb-4'>Details about the work done at LifeShape Clinic...</p>

      <h3 className='mb-2 text-lg font-bold'>
        Research Development Software Engineer - Trusted Networks Lab, QUT (NOV
        2023 - JUN 2024)
      </h3>
      <p className='mb-4'>
        Details about the work done at Trusted Networks Lab...
      </p>

      <h3 className='mb-2 text-lg font-bold'>
        Full-stack Developer - ClubSeeker (FEB 2024 - MAR 2024)
      </h3>
      <p>Details about the work done at ClubSeeker...</p>
    </div>
  ),
  education: (
    <div>
      <h3 className='mb-2 text-lg font-bold'>
        QUT (Queensland University of Technology)
      </h3>
      <p className='mb-4'>
        Master of Information Technology, Software Development (Jul 2022 - Jul
        2024)
      </p>

      <h3 className='mb-2 text-lg font-bold'>Panimalar Engineering College</h3>
      <p>
        Bachelor of Engineering - BE, Computer Software Engineering (2014 -
        2018)
      </p>
    </div>
  ),
  skills: (
    <div>
      <h3 className='mb-2 text-lg font-bold'>Backend Development</h3>
      <p className='mb-4'>
        Python, Node.js, PHP, REST API, Laravel, Firebase, C#
      </p>
      <h3 className='mb-2 text-lg font-bold'>Frontend Development</h3>
      <p className='mb-4'>
        React, Flutter, JavaScript, TypeScript, Bootstrap, Tailwind CSS, HTML,
        CSS
      </p>
      <h3 className='mb-2 text-lg font-bold'>Machine Learning</h3>
      <p className='mb-4'>
        Python, Pandas, NumPy, Sci-kit learn, Huggingface, Large Language
        Models, Natural Language Processing
      </p>
      <h3 className='mb-2 text-lg font-bold'>Other</h3>
      <p>Git, GitHub, UI/UX, UML, WordPress, CI/CD, Cypress</p>
    </div>
  ),
  certifications: (
    <div>
      <h3 className='mb-2 text-lg font-bold'>
        NDG Linux Essentials - Cisco Virtual Academy (Issued Jan 2024)
      </h3>
      <p className='mb-4'>Linux Kernel</p>
      <h3 className='mb-2 text-lg font-bold'>
        Programming with JavaScript - Coursera (Issued Jun 2023)
      </h3>
      <p>Credential ID FUEV39E6W92L</p>
    </div>
  ),
  awards: (
    <div>
      <h3 className='mb-2 text-lg font-bold'>
        Best Paper Award - Queensland University of Technology (Dec 2023)
      </h3>
      <p>
        "Guardify: An eBPF-Based Real-Time Defense Mechanism for Secure PyPi and
        Npm Package Installations"
      </p>
    </div>
  ),
  status: (
    // i am on australian tr 485 visa and available immediately.
    <div>
      <p className='mb-4'>
        I am on an Australian Temporary Graduate Visa (TR 485) and available
        immediately.
      </p>
    </div>
  )
}

export default function About() {
  const [activeSection, setActiveSection] = useState('summary')
  const [direction, setDirection] = useState(0)
  const contentRef = useRef(null)
  const scrollRef = useRef(null)
  const sectionOrder = Object.keys(sections)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) clearTimeout(scrollRef.current)

      scrollRef.current = setTimeout(() => {
        const container = contentRef.current
        if (!container) return

        const scrollPosition = container.scrollTop
        const containerHeight = container.clientHeight
        const currentIndex = Math.round(scrollPosition / containerHeight)
        const newSection = sectionOrder[currentIndex]

        if (newSection !== activeSection) {
          setDirection(
            currentIndex > sectionOrder.indexOf(activeSection) ? 1 : -1
          )
          setActiveSection(newSection)
        }
      }, 10)
    }

    const container = contentRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
      if (scrollRef.current) {
        clearTimeout(scrollRef.current)
      }
    }
  }, [activeSection, sectionOrder])

  useEffect(() => {
    const container = contentRef.current
    if (container) {
      const index = sectionOrder.indexOf(activeSection)
      container.scrollTo({
        top: index * container.clientHeight,
        behavior: 'smooth'
      })
    }
  }, [activeSection, sectionOrder])

  const handleSectionChange = newSection => {
    const currentIndex = sectionOrder.indexOf(activeSection)
    const newIndex = sectionOrder.indexOf(newSection)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setActiveSection(newSection)
  }

  const variants = {
    enter: direction => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: direction => ({
      y: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  return (
    <div className='flex h-[70vh] flex-row'>
      {/* Sidebar */}
      <div className='w-1/3 overflow-y-auto p-4'>
        <h1 className='mb-4 text-3xl font-bold'>My Profile</h1>
        <ul className='space-y-4'>
          {Object.entries(sections).map(([key, title]) => (
            <li key={key}>
              <button
                onClick={() => handleSectionChange(key)}
                className={`block w-full rounded-md px-4 py-2 text-left transition-colors hover:bg-gray-200 dark:hover:bg-gray-800 ${
                  activeSection === key
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'border border-black text-black dark:border-white dark:text-white'
                }`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div
        className='w-2/3 snap-y snap-mandatory overflow-y-auto border-t border-gray-300 dark:border-gray-700 lg:border-l lg:border-t-0'
        ref={contentRef}
      >
        {sectionOrder.map(section => (
          <div key={section} className='h-full snap-start'>
            <div className='h-full overflow-y-auto p-4'>
              <AnimatePresence mode='wait' custom={direction}>
                {activeSection === section && (
                  <motion.div
                    key={section}
                    custom={direction}
                    variants={variants}
                    initial='enter'
                    animate='center'
                    exit='exit'
                    transition={{
                      y: { type: 'spring', stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                  >
                    {details[section]}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
