import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { Container } from '../components/Container'

export default function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é a HEADER</h1>
      </header>

      <p className="text-justify">
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="text-6xl font-bold text-center py-8">Footer</p>
      </footer>
    </Container>
  )
}
