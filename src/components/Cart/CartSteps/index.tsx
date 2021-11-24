import { useSession } from 'next-auth/client'
import React, { useCallback, useEffect, useRef } from 'react'

import { Column, ColumnChangeHandler, RollColumn } from '~/components/RollColumn'
import { ContentRow } from '~/components/Signin/ContentRow'
import { Divider, Paragraph } from '~/components/styled'
import { useCartStep } from '~/hooks/useCart'

import { CheckDelivery } from './CheckDelivery'
import { CheckPayment } from './CheckPayment'
import { CheckPurchase } from './CheckPurchase'
import { StepFinish } from './StepFinish'

export const CartSteps: React.FC = () => {
  const start = useRef<boolean>(false)
  const [session] = useSession()
  const { setCartStep, step } = useCartStep()

  const handleColumnChage: ColumnChangeHandler = useCallback(
    column => {
      setCartStep(column)
    },
    [setCartStep]
  )

  useEffect(() => {
    // força voltar para primeira etapa caso atualize a tela
    if (!start.current) {
      start.current = true
      handleColumnChage(1)
    }
  }, [handleColumnChage])

  return (
    <>
      {session ? (
        <RollColumn key={`${session.user.name}`} onColumnChange={handleColumnChage}>
          <Column>
            <CheckPurchase hidden={step > 1} />
          </Column>
          <Column>
            <CheckDelivery hidden={step !== 2} />
          </Column>
          <Column>
            <CheckPayment hidden={step !== 3} />
          </Column>
          <Column>{step === 4 ? <StepFinish hidden={step !== 4} /> : null}</Column>
        </RollColumn>
      ) : (
        <>
          <br />
          <Divider />
          <ContentRow>
            <Paragraph align="center" verticalSpaced bold>
              Por favor, realize o login para continuar o pedido.
            </Paragraph>
          </ContentRow>
          <Divider />
          <br />
        </>
      )}
    </>
  )
}
