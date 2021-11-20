import React from 'react'

import { Column, ColumnChangeHandler, RollColumn } from '~/components/RollColumn'
import { useCartStep } from '~/hooks/useCart'

import { CheckDelivery } from './CheckDelivery'
import { CheckPayment } from './CheckPayment'
import { CheckPurchase } from './CheckPurchase'
import { StepFinish } from './StepFinish'

export const CartSteps: React.FC = () => {
  const { setCartStep } = useCartStep()

  const handleColumnChage: ColumnChangeHandler = column => {
    setCartStep(column)
  }

  return (
    <RollColumn onColumnChange={handleColumnChage}>
      <Column>
        <CheckPurchase />
      </Column>
      <Column>
        <CheckDelivery />
      </Column>
      <Column>
        <CheckPayment />
      </Column>
      <Column>
        <StepFinish />
      </Column>
    </RollColumn>
  )
}
