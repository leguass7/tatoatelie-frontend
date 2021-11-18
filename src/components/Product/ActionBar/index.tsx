import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { formatPrice } from '~/helpers'
import { darken } from '~/helpers/colors'
import { useCartItems } from '~/hooks/useCart'

import { ActionDescription, Button, Container } from './styles'
type Props = {
  productId: number
  price: number
}
export const ActionBar: React.FC<Props> = ({ price, productId }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const { addCartProduct } = useCartItems()
  const color = matchingBackgroudText('primary')
  const hoverColor = darken(theme.colors.primary)

  const handleButton = () => {
    addCartProduct({ price, id: productId, quantity: 1 })
  }

  return (
    <Container>
      <ActionDescription align="right">
        <span>
          <strong>{formatPrice(price)}</strong> à vista
        </span>
        <br />
        <strong>{formatPrice(price)}</strong> em 1x no cartão
      </ActionDescription>

      <Button color={color} themeColor={'primary'} hoverColor={hoverColor} onClick={handleButton}>
        COMPRAR
      </Button>
    </Container>
  )
}
