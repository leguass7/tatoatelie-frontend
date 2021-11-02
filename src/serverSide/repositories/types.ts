import { Image, ProductKind } from '.prisma/client'

export interface QueryPagination {
  size?: number
  page?: number
  slug?: string
  orderBy?: string
  order?: 'asc' | 'desc'
}

export interface IImageMeta {
  width?: number
  height?: number
  size?: number
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
  imageMeta?: IImageMeta
  images?: Image[]
  kind?: ProductKind
}

export type ProductsListType = IProduct & { images: Image[] }
