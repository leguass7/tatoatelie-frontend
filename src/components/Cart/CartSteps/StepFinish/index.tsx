import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { CircleLoading } from '~/components/CircleLoading'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PixCode } from '~/components/PixCode'
import { ContentLimit, Paragraph } from '~/components/styled'
import { phone } from '~/config'
import { useCartPurchase } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'
import { IPaymentPixData } from '~/serverSide/repositories/dto/payment.dto'

import { EmptyCart } from '../../EmptyCart'

export const StepFinish: React.FC<StepContainerProps> = ({ hidden }) => {
  const { replace } = useRouter()
  const isMounted = useIsMounted()
  const [generating, setGenerating] = useState(false)
  const { cartState, generateCartPayment, clearCartData } = useCartPurchase()
  const [hasError, setHasError] = useState(false)
  const [pixData, setPixData] = useState<IPaymentPixData>()

  const handleBack = useCallback(() => {
    replace('/').then(() => clearCartData())
  }, [replace, clearCartData])

  const handleTryAgain = useCallback(() => {
    setHasError(false)
  }, [])

  const generatePayment = useCallback(async () => {
    if (cartState.purchaseId && !hasError && !pixData) {
      setGenerating(true)
      setHasError(false)
      const response = await generateCartPayment(cartState?.paymentId)
      if (isMounted.current) {
        setGenerating(false)
        if (response && response.success) {
          setPixData(response.pix)
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
    const onClick = hasError ? handleTryAgain : handleBack
    return (
      <>
        <br />
        <FormGroup justify="center">
          <FormButton type="button" label={label} variant="text" onClick={onClick} />
        </FormGroup>
        <br />
      </>
    )
  }, [hasError, handleBack, handleTryAgain])

  return (
    <StepContainer hidden={hidden}>
      <br />
      <ContentLimit>
        {hasError ? (
          <>
            <Paragraph align="center">
              Numero do pedido: <strong>{cartState?.purchaseId || '--'}</strong>
            </Paragraph>
            <EmptyCart textSize={14}>
              <p>
                Oh não! Tivemos um problema ao gerar o PIX de pagamento. Por favor, entre em contato com loja
                <strong> {phone}</strong>.
              </p>
            </EmptyCart>
          </>
        ) : (
          <>
            <PixCode
              base64QRCode={pixData?.base64QRCode}
              purchaseId={cartState?.purchaseId}
              paymentId={cartState?.paymentId}
            />
          </>
        )}
        {renderButton()}
      </ContentLimit>
      {generating ? <CircleLoading light description="Gerando pagamento" /> : null}
    </StepContainer>
  )
}
