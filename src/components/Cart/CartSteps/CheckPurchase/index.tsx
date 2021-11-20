import React from 'react'

import { PageTitle } from '~/components/PageTitle'
import { useRollColumn } from '~/components/RollColumn'

export const CheckPurchase: React.FC = () => {
  const { goToColumn } = useRollColumn()

  const handleNext = () => {
    goToColumn(2)
  }

  return (
    <>
      <PageTitle title="Conferira o seu pedido" />

      <button type="button" onClick={handleNext}>
        PRÓXIMO
      </button>
    </>
  )
}
