import React from 'react'

import type { IProduct } from '~/serverSide/repositories/dto/product.dto'

import { ProductsContainer } from '../styles'
import { StencilItem } from './StencilItem'

export type StencilListProps = {
  list: IProduct[]
}

export const StencilList: React.FC<StencilListProps> = ({ list }) => {
  return (
    <ProductsContainer>
      {list.map(product => {
        return <StencilItem key={`product-${product.id}`} {...product} />
      })}
    </ProductsContainer>
  )
}
