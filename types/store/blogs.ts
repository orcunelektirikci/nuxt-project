import type { User } from '~/types/store/users'
import type { Obj } from '~/types/objects'

export interface Blog {
  id: number
  title: string
  body: string
  author: User
}

export type BlogItems = Obj<Blog>
