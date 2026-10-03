import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { PostFeatured } from '../components/PostFeatured'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'The blog - Este é um blog com Next.js',
    template: '%s | The blog',
  },
  description: 'Essa seria a descrição dessa página.',
}

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  )
}
