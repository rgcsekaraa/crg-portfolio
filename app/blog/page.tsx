import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <section className="w-full">
      <div className="max-w-3xl mx-auto w-full" style={{ maxWidth: '76rem' }}>
        <h1 className="title mb-6">Posts</h1>
        <PostsWithSearch posts={posts} />
      </div>
    </section>
  )
}
