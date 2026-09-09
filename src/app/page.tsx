import { Suspense } from 'react'
import { PostsList } from '../components/PostList'
import { SpinLoader } from '../components/SpinLoader'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { PostingHeading } from '../components/PostingHeading'

export default function HomePage() {
  return (
    <Container>
      <Header></Header>
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-250 ease-in-out"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Título do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time dateTime="2026/09/09" className="text-slate-600 text-sm">
            {' '}
            09/09/2026 10:00{' '}
          </time>
          <PostingHeading as="h2" url="/posts/titulo-do-post">
            Titulo do post
          </PostingHeading>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            ad eius voluptates tempora, quisquam esse vel enim, ut iure labore
            ipsa voluptatibus dolore at sint est quos non? Vero, quam! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
            dolor
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer></Footer>
    </Container>
  )
}
