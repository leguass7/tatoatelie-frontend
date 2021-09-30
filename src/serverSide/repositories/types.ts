import { Image, ProductKind } from '.prisma/client'

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
  size: number
  updatedAt: string
  createdAt: string
  actived?: boolean
  imageUrl?: string
  images?: Image[]
  kind?: ProductKind
}

export type ProductsListType = IProduct & { images: Image[] }
