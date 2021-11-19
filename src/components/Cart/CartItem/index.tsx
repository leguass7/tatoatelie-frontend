import React, { useMemo } from 'react'

import { ContentLimit, Divider, Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartItems } from '~/hooks/useCart'

import { ItemCartContainer, ItemCartDescription, ItemCartImage } from './styles'
type Props = {
  productId: number
}
export const CartItem: React.FC<Props> = ({ productId }) => {
  const { products } = useCartItems()

  const { price, quantity, product } = useMemo(() => {
    const p = products.find(f => f.productId === productId)
    return p
  }, [products, productId])

  const total = quantity * price

  return (
    <ContentLimit widthLimit={290}>
      <ItemCartContainer>
        <Paragraph bold>{product?.name}</Paragraph>
        <ItemCartDescription>
          <Paragraph>
            {formatPrice(price)} x {quantity}
            <br />
            {formatPrice(total)}
          </Paragraph>
        </ItemCartDescription>
      </ItemCartContainer>
      <Divider />
    </ContentLimit>
  )
}
