import React from 'react'

import { CartSvg } from '~/components/Images/CartSvg'
import { MenuSvg } from '~/components/Images/MenuSvg'

import { AppBarContainer, ItemBar } from './styles'

export const AppBar: React.FC = () => {
  return (
    <AppBarContainer>
      <ItemBar>
        <MenuSvg />
      </ItemBar>
      <ItemBar>
        <CartSvg />
      </ItemBar>
    </AppBarContainer>
  )
}
