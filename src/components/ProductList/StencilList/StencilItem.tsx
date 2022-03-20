import Link from 'next/link'
import React, { useCallback, useState } from 'react'

import ndImage from '~/assets/images/nd-vertical.jpg'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductDescription } from '~/components/ProductList/ProductDescription'
import { ProductLink } from '~/components/ProductList/styles'
import { productDetailDto, useCartItems } from '~/hooks/useCart'
import { useCartAddingProduct } from '~/hooks/useCart'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'

import { AddToCartButton } from '../AddToCartButton'
import { MaskedStencilImage } from './MaskedStencilImage'
import { StencilItemContainer } from './styles'

type StencilItemProps = IProduct & {}
export const StencilItem: React.FC<StencilItemProps> = props => {
  const { name, imageUrl, price, slug } = props
  const [actived, setActived] = useState(false)
  const { theme } = useAppTheme()
  const [, setAddingOpen] = useCartAddingProduct()
  const { addCartProduct } = useCartItems()

  const handleButton = useCallback(() => {
    addCartProduct({ price: props.price, productId: props.id, quantity: 1, product: productDetailDto({ ...props }) })
    setAddingOpen(props.id)
  }, [props, setAddingOpen, addCartProduct])

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
      <AddToCartButton onClick={handleButton} />
    </StencilItemContainer>
  )
}
