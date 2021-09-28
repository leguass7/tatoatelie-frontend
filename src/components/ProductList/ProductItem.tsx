import Link from 'next/link'
import React, { useState } from 'react'

import type { IProduct } from '~/serverSide/repositories/types'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { MaskedProductImage } from './MaskedProductImage'
import { ProductDescription } from './ProductDescription'
import { ProductItemContainer, ProductLink } from './styles'

type ProductItemProps = IProduct & {}
export const ProductItem: React.FC<ProductItemProps> = ({ title, imageUrl, price }) => {
  const [actived, setActived] = useState(false)
  const { theme } = useAppTheme()
  return (
    <ProductItemContainer space={theme.spacing.l}>
      <Link passHref href="/">
        <ProductLink onMouseOver={() => setActived(true)} onMouseOut={() => setActived(false)}>
          <MaskedProductImage actived={actived}>
            <img src={imageUrl} alt={title} />
          </MaskedProductImage>
          <ProductDescription title={title} price={price} />
        </ProductLink>
      </Link>
    </ProductItemContainer>
  )
}
