import Link from 'next/link'
import React, { useState } from 'react'

import ndImage from '~/assets/images/nd-vertical.jpg'
import type { IProduct } from '~/serverSide/repositories/types'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { MaskedProductImage } from './MaskedProductImage'
import { ProductDescription } from './ProductDescription'
import { ProductItemContainer, ProductLink } from './styles'

type ProductItemProps = IProduct & {}
export const ProductItem: React.FC<ProductItemProps> = ({ name, imageUrl, price, slug }) => {
  const [actived, setActived] = useState(false)
  const { theme } = useAppTheme()

  const image = imageUrl || ndImage

  return (
    <ProductItemContainer space={theme.spacing.l}>
      <Link passHref href={`/product/${slug}`}>
        <ProductLink onMouseOver={() => setActived(true)} onMouseOut={() => setActived(false)}>
          <MaskedProductImage actived={actived}>
            <img src={image} alt={name} />
          </MaskedProductImage>
          <ProductDescription title={name} price={price} />
        </ProductLink>
      </Link>
    </ProductItemContainer>
  )
}
