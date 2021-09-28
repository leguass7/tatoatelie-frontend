import React from 'react'

import type { IProduct } from '~/serverSide/repositories/types'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { ProductItemContainer, ProductLink } from './styles'

type ProductItemProps = IProduct & {}
export const ProductItem: React.FC<ProductItemProps> = ({ title }) => {
  const { theme } = useAppTheme()
  return (
    <ProductItemContainer space={theme.spacing.l}>
      <ProductLink>
        <div></div>
        <div>{title}</div>
      </ProductLink>
    </ProductItemContainer>
  )
}
