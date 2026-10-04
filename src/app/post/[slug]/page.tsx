import { clsx } from 'clsx'

type PostSlugPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function PostPage({ params }: PostSlugPageProps) {
  const { slug } = await params
  return (
    <div
      className={clsx(
        'min-h-[320px] bg-slate-900 text-slate-100',
        'mb-16 p-8 rounded-xl',
        'flex items-center justify-center',
        'text-center',
      )}
    >
      <div>
        <h1 className="text-7xl/tight mb-4 font-extrabold">{slug}</h1>
        <p>
          Esta é a página do post com o slug: <strong>{slug}</strong>.
        </p>
      </div>
    </div>
  )
}
