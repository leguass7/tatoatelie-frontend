import React from 'react'

import { FormAddress, FormAddressSuccessHandler } from '~/components/FormAddress'
import { PageTitle } from '~/components/PageTitle'

import { ModalAddrContainer, ModalAddrBox } from './styles'

type Props = {
  onCancel?: () => void
  onSuccess?: FormAddressSuccessHandler
  addressId?: number
}

export const ModalAddr: React.FC<Props> = ({ onCancel, onSuccess, addressId }) => {
  return (
    <ModalAddrContainer>
      <ModalAddrBox>
        <PageTitle title="Adicionar endereço" variant="h2" />
        {/* <DeliveryAlert>
          <p>Importante: </p>
        </DeliveryAlert> */}
        <FormAddress addressId={addressId} onCancel={onCancel} onSuccess={onSuccess} />
      </ModalAddrBox>
    </ModalAddrContainer>
  )
}
