import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { Divider } from '~/components/styled'
import { useCartItems } from '~/hooks/useCart'

import { CartContainer, CartTitle } from './styles'

export const Cart: React.FC = () => {
  const { theme } = useAppTheme()
  const { products } = useCartItems()
  return (
    <>
      <CartContainer textColor={theme.colors.primary}>
        <CartTitle>CARRINHO</CartTitle>
        <Divider />
        {products.map(itemCart => {
          return (
            <>
              <div>{itemCart.product.name}</div>
            </>
          )
        })}
      </CartContainer>
    </>
  )
}
