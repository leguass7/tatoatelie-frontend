import { useRouter } from 'next/router'
import React, { useCallback, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ContentLimit, Divider, FlexRow } from '~/components/styled'
import { useCartItems, useCartMenu } from '~/hooks/useCart'

import { FormButton } from '../Forms/FormButton'
import { CartItem } from './CartItem'
import { CartSummaryFooter } from './CartSummaryFooter'
import { EmptyCart } from './EmptyCart'
import { CartContainer, CartTitle } from './styles'

export const Cart: React.FC = () => {
  const { theme } = useAppTheme()
  const { prefetch, push } = useRouter()
  const { products } = useCartItems()
  const [, setCartMenuOpen] = useCartMenu()

  const handleToStepper = useCallback(async () => {
    await push('/stepper')
    setCartMenuOpen(false)
  }, [push, setCartMenuOpen])

  useEffect(() => {
    prefetch('/stepper')
  }, [prefetch])

  return (
    <PerfectScrollbar>
      <CartContainer textColor={theme.colors.primary}>
        <CartTitle>CARRINHO</CartTitle>
        <Divider textColor={theme.colors.secondary} />
        {products.length ? (
          <>
            {products.map(({ productId }) => {
              return <CartItem key={`itemcart-${productId}`} productId={productId} widthLimit={290} />
            })}
            <CartSummaryFooter />
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
    </PerfectScrollbar>
  )
}
