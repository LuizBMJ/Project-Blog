import { JsonPostRepository } from './json-repository'
import { PostRepository } from './post-repository'

export const postRepository: PostRepository = new JsonPostRepository()
