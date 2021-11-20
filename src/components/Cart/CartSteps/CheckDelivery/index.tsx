import React from 'react'

import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'

export const CheckDelivery: React.FC = () => {
  const { goToColumn } = useRollColumn()

  const handleNext = () => {
    goToColumn(3)
  }

  const handleBack = () => {
    goToColumn(1)
  }

  return (
    <>
      <PageTitle title="Endereço de entrega" />
      <button type="button" onClick={handleBack}>
        VOLTAR
      </button>
      <button type="button" onClick={handleNext}>
        PRÓXIMO
      </button>
    </>
  )
}
