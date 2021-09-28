import Link from 'next/link'
import React from 'react'

import type { IProduct } from '~/serverSide/repositories/types'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { MaskedProductImage } from './MaskedProductImage'
import { ProductItemContainer, ProductLink } from './styles'

type ProductItemProps = IProduct & {}
export const ProductItem: React.FC<ProductItemProps> = ({ title, imageUrl }) => {
  const { theme } = useAppTheme()
  return (
    <ProductItemContainer space={theme.spacing.l}>
      <Link passHref href="/">
        <ProductLink>
          <MaskedProductImage>
            <img src={imageUrl} alt={title} />
          </MaskedProductImage>
          <div>{title}</div>
        </ProductLink>
      </Link>
    </ProductItemContainer>
  )
}
