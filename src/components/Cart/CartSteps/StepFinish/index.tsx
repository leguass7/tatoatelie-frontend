import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { CircleLoading } from '~/components/CircleLoading'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { ContentLimit, Paragraph } from '~/components/styled'
import { useCartPurchase } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'

import { EmptyCart } from '../../EmptyCart'

export const StepFinish: React.FC<StepContainerProps> = ({ hidden }) => {
  const { replace } = useRouter()
  const isMounted = useIsMounted()
  const [generating, setGenerating] = useState(false)
  const { cartState, generateCartPayment, clearCartData } = useCartPurchase()
  const [hasError, setHasError] = useState(false)
  const [pixData, setPixData] = useState<any>()

  const handleBack = useCallback(() => {
    replace('/').then(() => clearCartData())
  }, [replace, clearCartData])

  const generatePayment = useCallback(async () => {
    if (cartState.purchaseId && !hasError && !pixData) {
      setGenerating(true)
      setHasError(false)
      const response = await generateCartPayment(cartState?.paymentId)
      if (isMounted.current) {
        setGenerating(false)
        if (response.success) {
          // ...
        } else {
          setHasError(true)
        }
      }
    }
  }, [isMounted, cartState, generateCartPayment, hasError, pixData])

  useEffect(() => {
    generatePayment()
  }, [generatePayment])

  const renderButton = useCallback(() => {
    const label = hasError ? 'Tentar novamente' : 'Página principal'
    const onClick = hasError ? generatePayment : handleBack
    return (
      <>
        <br />
        <FormGroup justify="center">
          <FormButton type="button" label={label} variant="text" onClick={onClick} />
        </FormGroup>
        <br />
      </>
    )
  }, [hasError, handleBack, generatePayment])

  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Finalizado" />
      <ContentLimit>
        <Paragraph>
          Numero do pedido: <strong>{cartState?.purchaseId || '--'}</strong>
        </Paragraph>
      </ContentLimit>
      {hasError ? (
        <EmptyCart
          textSize={14}
          message="Oh! Houve um erro ao gerar o PIX de pagamento. Por favor, entre em contato com loja."
        />
      ) : (
        <>
          <p>Mostrar dados do pagamento {cartState?.paymentId || '--'}</p>
        </>
      )}
      {renderButton()}
      {generating ? <CircleLoading light description="Gerando pagamento" /> : null}
    </StepContainer>
  )
}
