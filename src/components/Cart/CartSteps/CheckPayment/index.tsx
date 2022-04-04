import React, { useCallback, useEffect } from 'react'
import { BiHomeCircle } from 'react-icons/bi'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { CircleLoading } from '~/components/CircleLoading'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { CpfModal } from '~/components/User/CpfModal'
import { withCheckList } from '~/components/withChecklist'
import { formatPrice } from '~/helpers'
import { useCartAddress, useCartPayment, useCartPurchase } from '~/hooks/useCart'

import { PayMethod } from './PayMethod'
import { PayMode, PayModeItemProps } from './PayMode'

const ListItems = withCheckList(PayMode)

const modeList: PayModeItemProps[] = [
  { id: 1, label: 'À vista', description: 'Pagamento do valor total.' }
  // {
  //   id: 2,
  //   label: '50% mais 50%',
  //   description: 'Pagamento de 50% para efetuar o pedido, e o restante do pagamento na entrega.'
  // }
]

export const CheckPayment: React.FC<StepContainerProps> = ({ hidden }) => {
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()
  const { payMode, payMethod, updateCartPayment } = useCartPayment()
  const { savePurchase, saving, cartState } = useCartPurchase()
  const { shippingValue } = useCartAddress()

  const handleBack = () => goToColumn(2)
  const handleNext = useCallback(() => goToColumn(4), [goToColumn])

  const handleSelectPayMode = useCallback(
    (id: number[]) => {
      updateCartPayment({ payMode: id && id[0], payMethod: 'pix' })
    },
    [updateCartPayment]
  )

  const fetchPurchase = useCallback(async () => {
    await savePurchase()
  }, [savePurchase])

  useEffect(() => {
    if (cartState.purchaseId) {
      handleNext()
    }
  }, [cartState, handleNext])

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
      <Divider textColor={theme.colors.secondary} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <BiHomeCircle size={24} />
        <span style={{ padding: '0 8px' }}>Valor do frete: {formatPrice(shippingValue)}</span>
      </div>
      <Divider textColor={theme.colors.secondary} />
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Voltar" variant="text" onClick={handleBack} />
        <FormButton type="button" label="Finalizar pedido" onClick={fetchPurchase} disabled={disableNext} />
      </FormGroup>
      <CpfModal />
      <br />
      {saving ? <CircleLoading light /> : null}
    </StepContainer>
  )
}
