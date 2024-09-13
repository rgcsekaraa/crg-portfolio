import Link from 'next/link'
import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => (
        <li
  key={post.slug}
  className='border border-transparent hover:border-gray-200 bg-gray-50 hover:shadow-md transition duration-300 ease-in-out rounded-lg dark:bg-gray-800 dark:hover:border-gray-600'
>
  <Link
    href={`/blog/${post.slug}`}
    className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row p-4'
  >
    <div className='w-full max-w-3xl'>
      <p className='text-lg font-semibold dark:text-white'>{post.title}</p>
      <p className='mt-1 text-sm w-[90%] font-light text-muted-foreground line-clamp-2 overflow-hidden dark:text-gray-300'>
        {post.summary}
      </p>
    </div>

    {post.publishedAt && (
      <p className='mt-1 text-sm font-light dark:text-gray-400'>
        {formatDate(post.publishedAt)}
      </p>
    )}
  </Link>
</li>

      ))}
    </ul>
  )
}
