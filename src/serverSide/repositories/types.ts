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
  price: number
  imageUrl?: string
}

export type ProductsListType = IProduct & { images: Image[] }
