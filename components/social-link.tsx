import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export interface Props {
  className?: string
  href: string
  icon: React.ElementType
  children?: React.ReactNode
}

export function SocialLink({ className, href, children, icon: Icon }: Props) {
  return (
    <div className={cn(className, 'flex')}>
      <Link
        href={href}
        target='_blank'
        className='group flex text-sm font-medium transition'
      >
        <Icon className='h-6 w-6 flex-none fill-zinc-700 transition hover:fill-zinc-500 group-hover:fill-primary' />
        {children && <span className='ml-4'>{children}</span>}
      </Link>
    </div>
  )
}
