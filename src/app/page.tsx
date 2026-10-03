import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { PostFeatured } from '../components/PostFeatured'

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
