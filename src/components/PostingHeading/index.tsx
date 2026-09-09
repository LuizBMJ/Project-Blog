import Link from 'next/link'

type PostingHeadingProps = {
  children: React.ReactNode
  url: string
  as?: 'h1' | 'h2'
}

export function PostingHeading({
  children,
  url,
  as: Tag = 'h1',
}: PostingHeadingProps) {
  const headingClassesMap = {
    h1: 'text-4xl  sm:text-5xl',
    h2: 'text-2xl  sm:text-4xl',
  }

  const commonClasses = 'font-extrabold'

  return (
    <Tag className={`${headingClassesMap[Tag]} ${commonClasses}`}>
      <Link href={url}>{children}</Link>
    </Tag>
  )
}
