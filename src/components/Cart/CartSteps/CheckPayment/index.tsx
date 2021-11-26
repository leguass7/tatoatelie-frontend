import React, { useCallback, useState } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { CircleLoading } from '~/components/CircleLoading'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { withCheckList } from '~/components/withChecklist'
import { useCartPayment, useCartPurchase } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'
import { createPurchase } from '~/services/api/purchase.api'

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
  const [loading, setLoading] = useState(false)
  const isMounted = useIsMounted()
  const { goToColumn } = useRollColumn()
  const { payMode, payMethod, updateCartPayment } = useCartPayment()
  const { savePurchase, saving } = useCartPurchase()

  // const handleNext = () => goToColumn(4)
  const handleBack = () => goToColumn(2)

  const handleSelectPayMode = useCallback(
    (id: number[]) => {
      updateCartPayment({ payMode: id && id[0], payMethod: 'pix' })
    },
    [updateCartPayment]
  )

  const fetchPurchase = useCallback(async () => {
    const saved = await savePurchase()
    console.log('saved', saved)
  }, [savePurchase])

  const disableNext = !payMode || !payMethod || !!saving

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
        <FormButton type="button" label="Finalizar pedido" onClick={fetchPurchase} disabled={disableNext} />
      </FormGroup>
      <br />
      {saving ? <CircleLoading light /> : null}
    </StepContainer>
  )
}
