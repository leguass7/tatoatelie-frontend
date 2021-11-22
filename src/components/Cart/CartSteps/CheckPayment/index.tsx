import React from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'

export const CheckPayment: React.FC<StepContainerProps> = () => {
  const { goToColumn } = useRollColumn()

  const handleNext = () => {
    goToColumn(4)
  }

  const handleBack = () => {
    goToColumn(2)
  }

  return (
    <StepContainer>
      <PageTitle title="Método de pagamento" />
      <button type="button" onClick={handleBack}>
        VOLTAR
      </button>
      <button type="button" onClick={handleNext}>
        FINALIZAR
      </button>
    </StepContainer>
  )
}
