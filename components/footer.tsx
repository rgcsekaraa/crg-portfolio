import { SOCIALS } from '@/data/socials'
import { SocialLink } from './social-link'
import { siteMetadata } from '@/data/siteMetadata'

export function Footer() {
  return (
    <footer className='align-center h-20px flex justify-center pb-5 pt-10'>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        © {new Date().getFullYear()}&nbsp;
        <a
          href={siteMetadata.social.x}
          target='_blank'
          rel='noopener noreferrer'
        >
          rgcsekaraa.
        </a>
        &nbsp; All rights reserved.
      </p>
    </footer>
  )
}
