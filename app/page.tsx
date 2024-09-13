import Image from 'next/image'
import { SOCIALS } from '../data/socials'
import { SocialLink } from '@/components/social-link'
import React from 'react'
import { LINKS } from '@/lib/constants'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
  return (
    <React.Fragment>
      <div className='mx-auto max-w-screen-2xl px-4'>
        <section className='mb-4 grid grid-cols-1 gap-4 md:grid-cols-[1fr,1px,2fr]'>
          {/* Left Column */}
          <div className='flex w-full flex-col items-center text-center'>
            <div className='relative mb-3 mt-4 h-[130px] w-[130px] overflow-hidden rounded-full'>
              <Image
                src='/_static/me.png'
                width={130}
                height={130}
                alt='avatar'
                className='transform cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105'
                priority
              />
            </div>

            <h1 className='text-2xl font-bold'>Chandrasekaraa RG</h1>
            <div className='flex items-center text-sm text-gray-500 dark:text-gray-200'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='mr-1 h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zM12 10a2 2 0 110-4 2 2 0 010 4z'
                />
              </svg>
              <p>Brisbane, Australia</p>
            </div>

            <div className='mb-2 mt-4 flex space-x-4'>
              {SOCIALS.map(social => (
                <SocialLink
                  key={social.label}
                  aria-label={`Follow on ${social.label}`}
                  href={social.href}
                  icon={social.icon}
                />
              ))}
            </div>

            <p className='mt-4 inline-block cursor-pointer'>
              <a
                href={LINKS.RESUME}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-lg border border-black px-3 py-1 text-black transition-colors duration-200 ease-in hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black'
              >
                View Resume
              </a>
            </p>
          </div>

          {/* Vertical Line */}
          <div className='hidden w-[1px] bg-gray-200 dark:bg-gray-800 md:block'></div>

          {/* Right Column */}
          <div className='text-gray-700 dark:text-gray-100'>
            <p className='mt-6'>
              I&rsquo;m a fullstack software engineer specializing in building
              scalable web applications with rich user interfaces using
              JavaScript.
            </p>
            <p className='mb-4 mt-4'>
              Over the years, I&rsquo;ve worked on multiple startups, building
              end-to-end products in the insurance, game-tech, and video
              streaming domains. I have also actively contributed to various
              open-source projects. Currently, I&rsquo;m focused on developing
              iGaming solutions.
            </p>

            <p className='mb-4'>
              If you&rsquo;d like to collaborate, please&nbsp;
              <a
                href='mailto:rgcsekaraa@gmail.com'
                className='inline-block border-b'
              >
                send me an email
              </a>
              &nbsp;or reach out on any of my social handles.
            </p>
          </div>
        </section>

        <div className='my-8 w-full border-t border-gray-200 dark:border-gray-800' />

        <div>
          <h2 className='mb-6 text-2xl font-bold'>Latest posts</h2>
          <div className=''>
            <RecentPosts />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
