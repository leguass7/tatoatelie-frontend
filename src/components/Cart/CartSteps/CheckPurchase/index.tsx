import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { useCartItems } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'
import { findProductsByIds } from '~/services/api/product.api'

import { CartItem } from '../../CartItem'
import { CartSummaryFooter } from '../../CartSummaryFooter'
import { EmptyCart } from '../../EmptyCart'

export const CheckPurchase: React.FC<StepContainerProps> = ({ hidden }) => {
  const [session] = useSession()
  const { back } = useRouter()
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const { products } = useCartItems()

  const [, setServerProducts] = useState([])

  const handleNext = () => {
    goToColumn(2)
  }

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const response = await findProductsByIds(products.map(p => p.productId))
    if (isMounted.current) {
      setLoading(false)
      if (response && response.success) {
        setServerProducts(response.products)
        // IMPLEMENT: atualizar acarrinho com produtos do servidor
      }
    }
  }, [isMounted, products])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const canNext = !!(!loading && products.length && session && session.user)

  return (
    <StepContainer hidden={!!hidden} textColor={theme.colors.primary}>
      <PageTitle
        title="Conferira o seu pedido"
        description="Verifique se as informações do seu pedido estão corretas"
      />
      <Divider textColor={theme.colors.secondary} />
      <br />
      {products.length ? (
        <>
          {products.map(({ productId }) => {
            return <CartItem key={`itemcart-${productId}`} productId={productId} thumbnail />
          })}
          <CartSummaryFooter />
          <Divider textColor={theme.colors.secondary} />
        </>
      ) : (
        <EmptyCart />
      )}
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Continuar comprando" variant="text" onClick={() => back()} />
        {canNext ? <FormButton type="button" label="Próximo" onClick={handleNext} /> : null}
      </FormGroup>
      <br />
    </StepContainer>
  )
}
