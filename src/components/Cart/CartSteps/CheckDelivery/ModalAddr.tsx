import React from 'react'

import { PageTitle } from '~/components/PageTitle'

import { ModalAddrContainer, ModalAddrBox } from './styles'

export const ModalAddr: React.FC = () => {
  return (
    <ModalAddrContainer>
      <ModalAddrBox>
        <PageTitle title="Adicionar endereço" variant="h2" />
      </ModalAddrBox>
    </ModalAddrContainer>
  )
}
