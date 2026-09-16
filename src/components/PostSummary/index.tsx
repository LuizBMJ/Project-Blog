import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'
import { PostingHeading } from '../PostingHeading'
import { formatDatetime } from '@/src/utils/format-datetime'

type PostSummaryProps = {
  postHeading: 'h1' | 'h2'
  postLink: string
  createdAt: string
  title: string
  excerpt: string
}

export async function PostSummary({
  postHeading,
  postLink,
  createdAt,
  title,
  excerpt,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={createdAt}
        title={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>

      <PostingHeading as={postHeading} url={postLink}>
        {title}
      </PostingHeading>

      <p>{excerpt}</p>
    </div>
  )
}
