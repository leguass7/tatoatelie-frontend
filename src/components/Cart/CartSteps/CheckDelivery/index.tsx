import React, { useCallback, useEffect, useState } from 'react'

import { AddressItem } from '~/components/AddressItem'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { StepContainer, StepContainerProps } from '~/components/Cart/styles'
import { FormButton } from '~/components/Forms/FormButton'
import { FormGroup } from '~/components/Forms/FormGroup'
import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'
import { Divider } from '~/components/styled'
import { withCheckList } from '~/components/withChecklist'
import { useCartAddress } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'
import { getUserAdresses } from '~/services/api/users.api'

const ListItems = withCheckList(AddressItem)

export const CheckDelivery: React.FC<StepContainerProps> = ({ hidden }) => {
  const isMounted = useIsMounted()
  const [addrId, setAddrId] = useCartAddress()
  const [loading, setLoading] = useState(false)
  const { theme } = useAppTheme()
  const { goToColumn } = useRollColumn()
  const [addr, setAddr] = useState([])

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

  const handleNext = () => {
    goToColumn(3)
  }

  const handleBack = () => {
    goToColumn(1)
  }

  const handleSelectAddress = useCallback(
    (ids: number[]) => {
      const [id = 0] = ids
      console.log('id', id)
      setAddrId(id)
    },
    [setAddrId]
  )

  const disableNext = !!(!addrId || loading)
  console.log('addrId', addrId, loading)

  return (
    <StepContainer hidden={hidden}>
      <PageTitle title="Endereço de entrega" description="Informe o endereço de entrega ou retirar na loja." />
      <ListItems list={addr} onChange={handleSelectAddress} />
      <Divider textColor={theme.colors.secondary} />
      <br />
      <FormGroup justify="center">
        <FormButton type="button" label="Voltar" variant="text" onClick={handleBack} />
        <FormButton type="button" label="Próximo" onClick={handleNext} disabled={disableNext} />
      </FormGroup>
      <br />
    </StepContainer>
  )
}
