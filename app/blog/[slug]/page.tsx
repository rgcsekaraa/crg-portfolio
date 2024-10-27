import Link from 'next/link'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, author, publishedAt } = metadata

  return (
    <section>
      <div className='container max-w-4xl '>
        <Link
  href='/blog'
  className='mb-8 inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-gray-800 transition-colors duration-300 ease-in-out hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-800'
>
  <ArrowLeftIcon className='h-5 w-5' />
  <span>Back to posts</span>
</Link>


        <header>
          <h1 className='text-3xl font-extrabold'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {author} / {formatDate(publishedAt ?? '')}
          </p>
        </header>

        <main className='prose prose-md mt-5 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
        <footer className='mt-16'>
        </footer>
      </div>
    </section>
  )
}
