import React from 'react'

import { formatPrice } from '~/helpers'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { DescriptionContainer, ProductPrice, ProductTitle } from './styles'

type Props = {
  title: string
  price: number | string
}
export const ProductDescription: React.FC<Props> = ({ title, price }) => {
  const { theme } = useAppTheme()
  return (
    <DescriptionContainer color={theme.colors.primary}>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>
        <strong>{formatPrice(+price)}</strong>
      </ProductPrice>
    </DescriptionContainer>
  )
}
