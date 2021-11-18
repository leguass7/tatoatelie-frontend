import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { Divider } from '~/components/styled'

import { CartContainer, CartTitle } from './styles'

export const Cart: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <>
      <CartContainer textColor={theme.colors.primary}>
        <CartTitle>CARRINHO</CartTitle>
        <Divider />
      </CartContainer>
    </>
  )
}
