'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'

import Posts from '@/components/posts'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Extract unique categories from posts and exclude empty categories
  const categories = ['All', ...new Set(posts
    .map(post => post.category)
    .filter(category => category && category.trim() !== ''))]

  // Filter posts based on search query and selected category
  const filtered = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesQuery = post.title?.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  const isFiltered = query.length > 0

  // Reset search query
  function resetFilter() {
    setQuery('')
  }

  return (
    <div className="min-h-[400px]"> {/* Ensure minimum height to prevent shrinking */}
      {/* Search Bar */}
      <div className='mb-6 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>

      {/* Category Tabs */}
      <div className="tabs flex flex-wrap justify-left gap-2 mb-6"> {/* Added gap-2 for spacing */}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-0 rounded-sm border transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-gray-700 text-white border-gray-500 dark:bg-gray-500 dark:border-gray-400'
                : 'bg-gray-200 text-black border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered posts */}
      {filtered.length > 0 ? (
        <Posts posts={filtered} />
      ) : (
        <div className="text-center text-gray-500">
          No posts found. Try adjusting your search or category filter.
        </div>
      )}
    </div>
  )
}
