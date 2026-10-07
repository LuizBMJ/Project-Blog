import { findPostBySlugCached } from '@/src/lib/post/queries'
import { notFound } from 'next/navigation'

type PostSlugPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostSlugPageProps) {
  const { slug } = await params

  let post: Awaited<ReturnType<typeof findPostBySlugCached>> | undefined

  try {
    post = await findPostBySlugCached(slug)
  } catch {
    post = undefined
  }

  if (!post) notFound()
  return (
    <div>
      <p> {post.content} </p>
    </div>
  )
}
