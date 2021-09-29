import { serializedDto } from '~/helpers/database'

import { IProduct, ProductsListType } from '../types'

const baseURLImg = 'https://next.tatoatelie.com.br/api'
export function productDto(product: ProductsListType): IProduct {
  const { images, ...rest } = serializedDto(product)
  const imageUrl = images && images.length ? (images.find(f => !!f.main) || images[0])?.path : ''
  return { ...rest, imageUrl: imageUrl && `${baseURLImg}${imageUrl}` }
}
