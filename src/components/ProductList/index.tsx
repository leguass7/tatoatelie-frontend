import React from 'react'

import { IProduct } from '~/services/gtag/makeData/mock'

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
