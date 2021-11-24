import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { ContentLimit, Paragraph } from '~/components/styled'

export const StepFinish: React.FC<StepContainerProps> = ({ hidden }) => {
  const { replace } = useRouter()

  const handleBack = useCallback(() => {
    replace('/')
    // implement: limpar carrinho
  }, [replace])

  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Finalizado" />
      <ContentLimit>
        <Paragraph>
          Numero do pedido: <strong>0000</strong>
        </Paragraph>
      </ContentLimit>
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Página principal" variant="text" onClick={handleBack} />
      </FormGroup>
      <br />
    </StepContainer>
  )
}
