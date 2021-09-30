import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { formatPrice } from '~/helpers'
import { darken } from '~/helpers/colors'

import { ActionDescription, Button, Container } from './styles'
type Props = {
  productId: number
  price: number
}
export const ActionBar: React.FC<Props> = ({ price }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const color = matchingBackgroudText('primary')
  const hoverColor = darken(theme.colors.primary)

  return (
    <Container>
      <ActionDescription align="right">
        <span>
          <strong>{formatPrice(price)}</strong> à vista
        </span>
        <br />
        <strong>{formatPrice(price)}</strong> em 1x no cartão
      </ActionDescription>

      <Button color={color} themeColor={'primary'} hoverColor={hoverColor} disabled>
        COMPRAR
      </Button>
    </Container>
  )
}
