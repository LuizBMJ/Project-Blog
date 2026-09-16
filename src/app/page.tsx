import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PostFeatured } from '../components/PostFeatured'

export default function HomePage() {
  return (
    <Container>
      <Header></Header>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer></Footer>
    </Container>
  )
}
