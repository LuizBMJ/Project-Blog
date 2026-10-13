import Link from 'next/link'

type PostHeadingProps = {
  children: React.ReactNode
  url: string
  as?: 'h1' | 'h2'
}

export function PostHeading({
  children,
  url,
  as: Tag = 'h1',
}: PostHeadingProps) {
  const headingClassesMap = {
    h1: 'text-4xl  sm:text-5xl font-extrabold',
    h2: 'text-2xl font-bold',
  }

  const commonClasses = ''

  return (
    <Tag className={`${headingClassesMap[Tag]} ${commonClasses}`}>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
