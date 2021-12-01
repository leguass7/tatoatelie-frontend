import { Image, Product, ProductKind } from '.prisma/client'

import { imageBaseApi } from '~/config'
import { serializedDto } from '~/helpers/database'

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

function imageMetaDto(data: Partial<IImageMeta>): IImageMeta {
  return data ? { width: data?.width, height: data?.height, size: data?.size } : {}
}

export function productDto(product: ProductsListType | Product, listImages?: boolean): IProduct {
  if (!product) return null
  const { images, ...rest } = serializedDto(product) as IProduct

  const mainImage = images && images.length ? images.find(f => !!f.main) || images[0] || null : null

  const imageUrl = mainImage?.path
  const imageMeta = (mainImage?.meta && imageMetaDto(JSON.parse(mainImage?.meta))) || {}

  const result: IProduct = {
    ...rest,
    imageUrl: (imageUrl && `${imageBaseApi}${imageUrl}`) || null,
    imageMeta
  }
  if (listImages && images) result.images = images
  return result
}
