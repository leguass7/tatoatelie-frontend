import React from 'react'

import type { IProduct } from '~/serverSide/repositories/types'

import { ProductItem } from './ProductItem'
import { ProductsContainer } from './styles'

export type ProductListProps = {
  list: IProduct[]
}

export const ProductList: React.FC<ProductListProps> = ({ list }) => {
  return (
    <ProductsContainer>
      {list.map(product => {
        return <ProductItem key={`product-${product.id}`} {...product} />
      })}
    </ProductsContainer>
  )
}
