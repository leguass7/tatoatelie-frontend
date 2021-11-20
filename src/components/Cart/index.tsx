import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ContentLimit, Divider, FlexRow, Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartItems, useCartMenu } from '~/hooks/useCart'

import { FormButton } from '../Forms/FormButton'
import { CartItem } from './CartItem'
import { EmptyCart } from './EmptyCart'
import { CartContainer, CartTitle } from './styles'

export const Cart: React.FC = () => {
  const { theme } = useAppTheme()
  const { prefetch, push } = useRouter()
  const { products } = useCartItems()
  const [, setCartMenuOpen] = useCartMenu()

  const total = products.reduce((acc, p) => (acc += p.price * p.quantity), 0)

  const handleToStepper = useCallback(async () => {
    await push('/stepper')
    setCartMenuOpen(false)
  }, [push, setCartMenuOpen])

  useEffect(() => {
    prefetch('/stepper')
  }, [prefetch])

  return (
    <>
      <CartContainer textColor={theme.colors.primary}>
        <CartTitle>CARRINHO</CartTitle>
        <Divider textColor={theme.colors.secondary} />
        {products.length ? (
          <>
            {products.map(({ productId }) => {
              return <CartItem key={`itemcart-${productId}`} productId={productId} />
            })}
            <Paragraph verticalSpaced>
              Total: <strong>{formatPrice(total)}</strong>
            </Paragraph>
            <Divider textColor={theme.colors.secondary} />
            <ContentLimit widthLimit={290} verticalSpaced>
              <FlexRow>
                <FormButton label={'Finalizar compra'} type="button" bold onClick={handleToStepper} />
              </FlexRow>
            </ContentLimit>
          </>
        ) : (
          <EmptyCart />
        )}
      </CartContainer>
    </>
  )
}
