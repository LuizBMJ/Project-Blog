import type { Metadata } from 'next'
import './globals.css'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Container } from '../components/Container';

export const metadata: Metadata = {
  title: 'The blog - Este é um blog com Next.js',
  description: 'Essa seria a descrição dessa página.',
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header></Header>
          {children}
          
          <Footer></Footer>
        </Container>
      </body>
    </html>
  )
}
