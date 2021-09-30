import { Product } from '.prisma/client'

import { serializedDto } from '~/helpers/database'

import { IProduct, ProductsListType } from '../types'

const baseURLImg = 'https://next.tatoatelie.com.br/api'
export function productDto(product: ProductsListType | Product, listImages?: boolean): IProduct {
  const { images, ...rest } = serializedDto(product) as IProduct
  const imageUrl = images && images.length ? (images.find(f => !!f.main) || images[0])?.path : ''
  const result: IProduct = { ...rest, imageUrl: imageUrl && `${baseURLImg}${imageUrl}` }
  if (listImages && images) result.images = images
  return result
}
