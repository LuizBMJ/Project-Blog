import { postRepository } from '@/src/repositories/post'
import { PostCoverImage } from '../PostCoverImage'
import { PostingHeading } from '../PostingHeading'

export async function PostsList() {
  const posts = await postRepository.findAll()

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const PostLink = `/posts/${post.slug}`

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{
                href: PostLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />
            <div className="flex flex-col gap-4 sm:justify-center">
              <time
                dateTime={post.createdAt}
                className="text-slate-600 text-sm"
              >
                {post.createdAt}
              </time>
              <PostingHeading as="h2" url={PostLink}>
                {post.title}
              </PostingHeading>
              <p>{post.excerpt}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
