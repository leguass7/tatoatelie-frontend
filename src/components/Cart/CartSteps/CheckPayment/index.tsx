import React, { useCallback } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { withCheckList } from '~/components/withChecklist'
import { useCartPayment } from '~/hooks/useCart'

import { PayMethod } from './PayMethod'
import { PayMode, PayModeItemProps } from './PayMode'

const ListItems = withCheckList(PayMode)

const modeList: PayModeItemProps[] = [
  { id: 1, label: 'À vista', description: 'Pagamento do valor total.' },
  {
    id: 2,
    label: '50% mais 50%',
    description: 'Pagamento de 50% para efetuar o pedido, e o restante do pagamento na entrega.'
  }
]

export const CheckPayment: React.FC<StepContainerProps> = ({ hidden }) => {
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()
  const { payMode, payMethod, updateCartPayment } = useCartPayment()

  const handleNext = () => goToColumn(4)
  const handleBack = () => goToColumn(2)

  const handleSelectPayMode = useCallback(
    (id: number[]) => {
      updateCartPayment({ payMode: id && id[0], payMethod: 'pix' })
    },
    [updateCartPayment]
  )

  const disableNext = !payMode || !payMethod

  return (
    <StepContainer hidden={hidden}>
      <Divider textColor={theme.colors.secondary} />
      <PayMethod />
      <Divider textColor={theme.colors.secondary} />
      <PageTitle variant="h2" title="Modo de pagamento" />
      <ListItems
        key={`list-paymode-${modeList.length}`}
        list={modeList}
        onChange={handleSelectPayMode}
        defaultSelected={[payMode]}
      />
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Voltar" variant="text" onClick={handleBack} />
        <FormButton type="button" label="Finalizar pedido" onClick={handleNext} disabled={disableNext} />
      </FormGroup>
      <br />
    </StepContainer>
  )
}
