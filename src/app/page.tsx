import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <Container>
      <Header></Header>
      <section className="grid grid-cols-1 gap-8 mb-16 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="">
          <Image
            className="group-hover:scale-105 transition-transform duration-250 ease-in-out"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
          />
        </Link>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ad
          eius voluptates tempora, quisquam esse vel enim, ut iure labore ipsa
          voluptatibus dolore at sint est quos non? Vero, quam! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Obcaecati ipsam dolor
          earum voluptas architecto, omnis quasi tempore similique asperiores
          aliquam quam molestias. Ratione laboriosam placeat, harum sed aut
          blanditiis consequatur? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Delectus esse deleniti quis necessitatibus
          praesentium aspernatur sed corporis quas quae ratione minima, dicta
          pariatur fugiat dolor adipisci qui est omnis exercitationem!z
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer></Footer>
    </Container>
  )
}
