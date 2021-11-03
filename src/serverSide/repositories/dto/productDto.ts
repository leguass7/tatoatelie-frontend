import { Product } from '.prisma/client'

import { imageBaseApi } from '~/config'
import { serializedDto } from '~/helpers/database'

import { IImageMeta, IProduct, ProductsListType } from '../types'

function imageMetaDto(data: Partial<IImageMeta>): IImageMeta {
  return data ? { width: data?.width, height: data?.height, size: data?.size } : {}
}

export function productDto(product: ProductsListType | Product, listImages?: boolean): IProduct {
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
