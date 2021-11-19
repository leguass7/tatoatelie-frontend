import React, { useCallback } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductCounter } from '~/components/Product/ProductCounter'
import { ContentLimit, Divider, Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartItems } from '~/hooks/useCart'

import {
  AddProductItemContainer,
  AddProductItemImage,
  AddProductItemImageMask,
  AddProductItemDescription
} from './styles'

type Props = {
  productId: number
}
export const AddingProduct: React.FC<Props> = ({ productId }) => {
  const { theme } = useAppTheme()
  const { products, setProductQuantity } = useCartItems()

  const handleChange = useCallback(
    (qtde: number) => {
      setProductQuantity(productId, qtde)
    },
    [productId, setProductQuantity]
  )

  if (!productId) return null

  const found = products.find(f => f.productId === productId)
  const { price, product, quantity } = found

  return (
    <ContentLimit horizontalSpaced verticalSpaced widthLimit={290}>
      <AddProductItemContainer textColor={theme.colors.primary}>
        <AddProductItemImage>
          <AddProductItemImageMask url={product?.imageUrl} size={92} />
        </AddProductItemImage>
        <AddProductItemDescription>
          <Paragraph bold align="right" size={16}>
            {product?.name}
          </Paragraph>
          <Paragraph size={14} align="right" bottomMargin={10}>
            {product && product?.kind ? <>{product?.kind?.label} </> : null}
            {product && product?.size ? <>{product?.size} cm</> : null}
            <br />
            {quantity} x {formatPrice(price)}
            <br />
            <strong>{formatPrice(price * quantity)}</strong>
          </Paragraph>
          <ProductCounter onChange={handleChange} />
        </AddProductItemDescription>
      </AddProductItemContainer>
      <Divider />
    </ContentLimit>
  )
}
