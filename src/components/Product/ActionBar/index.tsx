import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { formatPrice } from '~/helpers'
import { darken } from '~/helpers/colors'
import { productDetailDto, useCartItems } from '~/hooks/useCart'
import { useCartAddingProduct } from '~/hooks/useCart'
import { IProduct } from '~/serverSide/repositories/types'

import { ActionDescription, Button, Container } from './styles'
interface ActionProduct {
  product: IProduct
}

export const ActionBar: React.FC<ActionProduct> = ({ product }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [, setAddingOpen] = useCartAddingProduct()
  const { addCartProduct } = useCartItems()
  const color = matchingBackgroudText('primary')
  const hoverColor = darken(theme.colors.primary)

  const handleButton = () => {
    addCartProduct({ price: product.price, productId: product.id, quantity: 1, product: productDetailDto(product) })
    setAddingOpen(product.id)
  }

  return (
    <Container>
      <ActionDescription align="right">
        <span>
          <strong>{formatPrice(product.price)}</strong> à vista
        </span>
        <br />
        <strong>{formatPrice(product.price)}</strong> em 1x no cartão
      </ActionDescription>

      <Button color={color} themeColor={'primary'} hoverColor={hoverColor} onClick={handleButton}>
        COMPRAR
      </Button>
    </Container>
  )
}
