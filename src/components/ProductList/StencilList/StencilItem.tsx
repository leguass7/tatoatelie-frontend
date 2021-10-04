import Link from 'next/link'
import React, { useState } from 'react'

import ndImage from '~/assets/images/nd-vertical.jpg'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductDescription } from '~/components/ProductList/ProductDescription'
import { ProductLink } from '~/components/ProductList/styles'
import type { IProduct } from '~/serverSide/repositories/types'

import { MaskedStencilImage } from './MaskedStencilImage'
import { StencilItemContainer } from './styles'

type StencilItemProps = IProduct & {}
export const StencilItem: React.FC<StencilItemProps> = ({ name, imageUrl, price, slug }) => {
  const [actived, setActived] = useState(false)
  const { theme } = useAppTheme()

  return (
    <StencilItemContainer space={theme.spacing.l}>
      <Link passHref href={`/product/${slug}`}>
        <ProductLink onMouseOver={() => setActived(true)} onMouseOut={() => setActived(false)}>
          <MaskedStencilImage actived={actived}>
            <img src={imageUrl || ndImage} alt={name} />
          </MaskedStencilImage>
          <ProductDescription title={name} price={price} />
        </ProductLink>
      </Link>
    </StencilItemContainer>
  )
}
