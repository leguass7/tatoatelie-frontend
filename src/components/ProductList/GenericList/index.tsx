import React from 'react'

import type { IProduct } from '~/serverSide/repositories/types'

import { GenericItem } from './GenericItem'
import { GenericProductsContainer } from './styles'

export type GenericListProps = {
  list: IProduct[]
  columns?: number
}

export const GenericList: React.FC<GenericListProps> = ({ list, columns }) => {
  return (
    <GenericProductsContainer columns={columns}>
      {list.map(product => {
        return <GenericItem key={`product-${product.id}`} {...product} />
      })}
    </GenericProductsContainer>
  )
}
