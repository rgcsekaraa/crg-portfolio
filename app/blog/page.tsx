import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className="w-full p-6 shadow-md border border-slate-200 rounded-xl dark:border-slate-800 dark:shadow-slate-900">
      <div className="max-w-3xl mx-auto w-full" style={{ maxWidth: '76rem' }}>
        <h1 className="font-bold text-3xl mb-4">My Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
