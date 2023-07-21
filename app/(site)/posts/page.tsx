import React from 'react'
import Link from 'next/link'
import { getAllPostsMeta } from '../../../lib/mdx'
const Page = async () => {
    const posts = await getAllPostsMeta()
  return (
    <div>
         <div className='flex gap-6 mt-6'>
          {posts?.map((post:any) => (
            <Link
              href={`posts/${post.slug}`}
              key={post?.title}
              className='p-8 rounded-md shadow-md'
            >
              <h3 className='text-xl font-semibold'>{post.title}</h3>
              <p className='mt-4 text-sm'>{post.author}</p>
              <time className='text-[12px] text-gray-400'>
                {post.publishDate}
              </time>
            </Link>
          ))}
        </div>
    </div>
  )
}

export default Page