import React from 'react'

import { FormAddress } from '~/components/FormAddress'
import { PageTitle } from '~/components/PageTitle'

import { ModalAddrContainer, ModalAddrBox } from './styles'

type Props = {
  onCancel?: () => void
}
export const ModalAddr: React.FC<Props> = ({ onCancel }) => {
  return (
    <ModalAddrContainer>
      <ModalAddrBox>
        <PageTitle title="Adicionar endereço" variant="h2" />
        {/* <DeliveryAlert>
          <p>Importante: </p>
        </DeliveryAlert> */}
        <FormAddress onCancel={onCancel} />
      </ModalAddrBox>
    </ModalAddrContainer>
  )
}
