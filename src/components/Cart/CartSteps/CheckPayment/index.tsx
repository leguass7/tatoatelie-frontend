import React from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { withCheckList } from '~/components/withChecklist'

import { PayMethod } from './PayMethod'
import { PayMode, PayModeItemProps } from './PayMode'

const ListItems = withCheckList(PayMode)

const list: PayModeItemProps[] = [
  {
    id: 1,
    label: 'a vista',
    description: ''
  },
  {
    id: 2,
    label: '50% mais 50%',
    description: ''
  }
]

export const CheckPayment: React.FC<StepContainerProps> = ({ hidden }) => {
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()

  const handleNext = () => goToColumn(4)
  const handleBack = () => goToColumn(2)

  const canNext = true

  return (
    <StepContainer hidden={hidden}>
      {/* <PageTitle variant="h1" title="Método de pagamento" /> */}
      <Divider textColor={theme.colors.secondary} />
      <PayMethod />
      <Divider textColor={theme.colors.secondary} />
      <PageTitle variant="h2" title="Modo de pagamento" />
      <ListItems
        key={`list-paymode-${list.length}`}
        list={list}
        // onChange={handleSelectAddress}
        defaultSelected={[2]}
      />
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Voltar" variant="text" onClick={handleBack} />
        {canNext ? <FormButton type="button" label="Próximo" onClick={handleNext} /> : null}
      </FormGroup>
      <br />
    </StepContainer>
  )
}
