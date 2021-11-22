import React from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { PageTitle } from '~/components/PageTitle'

export const StepFinish: React.FC<StepContainerProps> = ({ hidden }) => {
  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Finalizado" />
    </StepContainer>
  )
}
