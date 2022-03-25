import { Button, ButtonGroup, Modal } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { BiHomeCircle } from 'react-icons/bi'

import { AddressItem, AddressItemProps } from '~/components/AddressItem'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { withCheckList } from '~/components/withChecklist'
import { formatPrice } from '~/helpers'
import { useCartAddress } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'
import { getUserAdresses } from '~/services/api/users.api'

import { ModalAddr } from './ModalAddr'

const ListItems = withCheckList(AddressItem)

type ItemProps = AddressItemProps

const yourself: ItemProps = {
  id: -1,
  label: 'Retirar na loja'
}

export const CheckDelivery: React.FC<StepContainerProps> = ({ hidden }) => {
  const [addrOpen, setAddrOpen] = useState(false)
  const isMounted = useIsMounted()
  const { addrId, setCartAddrId: setAddrId, setShippingValue, shippingValue } = useCartAddress()
  const [loading, setLoading] = useState(false)
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()
  const [addr, setAddr] = useState<AddressItemProps[]>([])

  const fetchData = useCallback(async () => {
    setLoading(true)
    const response = await getUserAdresses()
    if (isMounted.current) {
      setLoading(false)
      if (response && response.success) {
        setAddr(response.adresses)
        // IMPLEMENT: atualizar acarrinho com produtos do servidor
      }
    }
  }, [isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleNext = () => goToColumn(3)
  const handleBack = () => goToColumn(1)

  const handleModalClose = useCallback(() => {
    setAddrOpen(false)
  }, [])

  const handleModalSuccess = useCallback(
    (id: number) => {
      setAddrOpen(false)
      if (id) setAddrId(id)
      fetchData()
    },
    [fetchData, setAddrId]
  )

  const handleSelectAddress = useCallback(
    (ids: number[]) => {
      const [id = 0] = ids
      const selectedAddress = addr?.find?.(adr => adr.id === id)

      let value = 0
      if (selectedAddress) {
        value = 15
        if (selectedAddress.cityId !== 2304400) value = 20
      }

      setShippingValue(value)
      setAddrId(id)
    },
    [setAddrId, setShippingValue, addr]
  )

  const list = useMemo(() => [yourself, ...addr], [addr])

  const disableNext = !!(!addrId || loading)

  return (
    <>
      <StepContainer hidden={hidden}>
        <PageTitle title="Endereço de entrega" description="Informe o endereço de entrega ou retirar na loja." />
        <ButtonGroup>
          <Button variant="outlined" onClick={() => setAddrOpen(true)}>
            adicionar endereço
          </Button>
        </ButtonGroup>
        <Divider />
        <ListItems
          key={`list-addr-${list.length}`}
          list={list}
          onChange={handleSelectAddress}
          defaultSelected={[addrId]}
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
          <FormButton type="button" label="Próximo" onClick={handleNext} disabled={disableNext} />
        </FormGroup>
        <br />
      </StepContainer>
      <Modal open={addrOpen} onClose={handleModalClose}>
        <div>
          <ModalAddr onCancel={handleModalClose} onSuccess={handleModalSuccess} />
        </div>
      </Modal>
    </>
  )
}
