import React from 'react'

import { Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartItems } from '~/hooks/useCart'

export const CartSummaryFooter: React.FC = () => {
  const { total } = useCartItems()
  return (
    <Paragraph verticalSpaced>
      Total: <strong>{formatPrice(total)}</strong>
    </Paragraph>
  )
}
