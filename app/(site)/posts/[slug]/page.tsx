import { getPostBySlug } from '@/lib/mdx'
import rehypeHighlight from 'rehype-highlight';


const getPageContent = async (slug:any) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }:any) {
  const { meta } = await getPageContent(params.slug)
  return { title: (meta as any).title }
}

const Page = async ({ params }:any) => {
  const { content } = await getPageContent(params.slug)
   

  return (
    <section className='py-24'>
      <div className='container py-4 prose'>{content}</div>
    </section>
  )
}

export default Page