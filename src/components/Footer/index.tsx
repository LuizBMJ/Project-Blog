import clsx from 'clsx'

export function Footer() {
  console.log('FOOTER')

  return (
    <footer>
      <p className={clsx('text-6xl', 'font-bold', 'text-center', 'py-8')}>
        Footer
      </p>
    </footer>
  )
}
