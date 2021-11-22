import React from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'

export const CheckDelivery: React.FC<StepContainerProps> = ({ hidden }) => {
  const { goToColumn } = useRollColumn()

  const handleNext = () => {
    goToColumn(3)
  }

  const handleBack = () => {
    goToColumn(1)
  }

  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Endereço de entrega" />
      <button type="button" onClick={handleBack}>
        VOLTAR
      </button>
      <button type="button" onClick={handleNext}>
        PRÓXIMO
      </button>
    </StepContainer>
  )
}
