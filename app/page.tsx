import Link from "next/link"
import Hello from "./content/hello.mdx"
import { getAllPostsMeta } from "@/lib/mdx"

export default async function Home() {
  const posts = await getAllPostsMeta()
  return (
   <main>
       <div className='flex gap-6 mt-6'>
          {posts?.map((post:any) => (
            <Link
              href={`/${post.slug}`}
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

     </main>
  )
}
