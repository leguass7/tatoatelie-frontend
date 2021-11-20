import React from 'react'

import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'

export const CheckPayment: React.FC = () => {
  const { goToColumn } = useRollColumn()

  // const handleNext = () => {
  //   goToColumn(3)
  // }

  const handleBack = () => {
    goToColumn(2)
  }

  return (
    <>
      <PageTitle title="Endereço de entrega" />
      <button type="button" onClick={handleBack}>
        VOLTAR
      </button>
      <button type="button">FINALIZAR</button>
    </>
  )
}
