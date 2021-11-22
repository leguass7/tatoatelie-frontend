import React from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { PageTitle } from '~/components/PageTitle'

export const StepFinish: React.FC<StepContainerProps> = () => {
  return (
    <StepContainer>
      <PageTitle title="Finalizado" />
    </StepContainer>
  )
}
