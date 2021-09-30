import { Image } from '.prisma/client'

export interface QueryPagination {
  size?: number
  page?: number
  slug?: string
}

export interface IProduct {
  id: number
  slug: string
  name: string
  description: string
  price: number
  actived?: boolean
  imageUrl?: string
  images?: Image[]
}

export type ProductsListType = IProduct & { images: Image[] }
