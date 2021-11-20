import cx from 'classnames'
import React, { useCallback, useState } from 'react'
import { IoCheckmarkCircleOutline, IoTrash } from 'react-icons/io5'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductCounter } from '~/components/Product/ProductCounter'
import { ContentLimit, Divider, Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartAddingProduct, useCartItems } from '~/hooks/useCart'

import { CartBar, CartBarButton } from '../CartItem/styles'
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
  const { products, setProductQuantity, removeCartProduct } = useCartItems()
  const [, setAdding] = useCartAddingProduct()
  const [removing, setRemoving] = useState(false)

  const handleChange = useCallback(
    (qtde: number) => {
      setProductQuantity(productId, qtde)
    },
    [productId, setProductQuantity]
  )

  const removeItem = () => {
    try {
      setAdding(0)
      removeCartProduct(productId)
    } finally {
    }
  }

  const handleRemove = () => {
    setRemoving(true)
    setTimeout(() => removeItem(), 600)
  }

  if (!productId) return null

  const found = products.find(f => f.productId === productId)
  const { price, product, quantity } = found

  return (
    <ContentLimit horizontalSpaced verticalSpaced widthLimit={290}>
      <AddProductItemContainer textColor={theme.colors.primary} className={cx({ fadeout: !!removing, removing })}>
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
        </AddProductItemDescription>
      </AddProductItemContainer>
      <Divider />
      <CartBar>
        <CartBarButton type="button" textColor={theme.colors.secondary} onClick={handleRemove}>
          <IoTrash size={28} />
        </CartBarButton>
        <ProductCounter quantity={quantity} onChange={handleChange} />
        <CartBarButton type="button" textColor={theme.colors.primary} onClick={() => setAdding(0)}>
          <IoCheckmarkCircleOutline size={28} />
        </CartBarButton>
      </CartBar>
    </ContentLimit>
  )
}
