import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'

export const CheckPayment: React.FC<StepContainerProps> = ({ hidden }) => {
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()

  const handleNext = () => {
    goToColumn(4)
  }

  const handleBack = () => {
    goToColumn(2)
  }

  const canNext = true

  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Método de pagamento" />
      <Divider textColor={theme.colors.secondary} />
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Voltar" variant="text" onClick={handleBack} />
        {canNext ? <FormButton type="button" label="Próximo" onClick={handleNext} /> : null}
      </FormGroup>
      <br />
    </StepContainer>
  )
}
