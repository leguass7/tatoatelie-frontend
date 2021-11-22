import cx from 'classnames'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { IoTrash } from 'react-icons/io5'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductCounter } from '~/components/Product/ProductCounter'
import { ContentLimit, Divider, Paragraph } from '~/components/styled'
import { formatPrice } from '~/helpers'
import { useCartItems, useCartMenu } from '~/hooks/useCart'
import { useIsMounted } from '~/hooks/useIsMounted'

import { CartItemContainer, CartItemDescription, CartBar, CartBarButton } from './styles'
type Props = {
  productId: number
  widthLimit?: number
  thumbnail?: boolean
}
export const CartItem: React.FC<Props> = ({ productId, widthLimit }) => {
  const isMounted = useIsMounted()
  const router = useRouter()
  const { theme } = useAppTheme()
  const { products, setProductQuantity, removeCartProduct } = useCartItems()
  const [, setCartOpen] = useCartMenu()
  const [removing, setRemoving] = useState(false)

  const { price, quantity, product } = useMemo(() => {
    const p = products.find(f => f.productId === productId)
    return p
  }, [products, productId])

  const total = quantity * price

  const handleChange = useCallback(
    (qtde: number) => {
      setProductQuantity(productId, qtde)
    },
    [productId, setProductQuantity]
  )

  const removeItem = useCallback(() => {
    if (isMounted.current) {
      removeCartProduct(productId)
    }
  }, [isMounted, removeCartProduct, productId])

  const handleRemove = () => {
    setRemoving(true)
    setTimeout(() => removeItem(), 600)
  }

  const handleLink = async () => {
    await router.push(`/product/${product.slug}`)
    setCartOpen(false)
  }

  useEffect(() => {
    if (product?.slug) {
      router.prefetch(`/product/${product.slug}`)
    }
  }, [product, router])

  return (
    <ContentLimit widthLimit={widthLimit}>
      <CartItemContainer className={cx({ fadeout: !!removing, removing })}>
        <Paragraph bold>{product?.name}</Paragraph>
        <CartItemDescription>
          <Paragraph align="left" horizontalSpaced={false}>
            {product?.size ? `${product.size} cm` : null}
            <br />
            {product?.kind ? `${product?.kind?.label}` : '--'}
          </Paragraph>
          <Paragraph align="right" bottomMargin={theme.spacing.m}>
            {formatPrice(price)} x {quantity}
            <br />
            <strong>{formatPrice(total)}</strong>
          </Paragraph>
        </CartItemDescription>
        <CartBar>
          <CartBarButton type="button" onClick={handleRemove} textColor={theme.colors.secondary}>
            <IoTrash size={28} />
          </CartBarButton>
          <ProductCounter quantity={quantity} onChange={handleChange} />
          <CartBarButton type="button" textColor={theme.colors.primary} onClick={handleLink}>
            <FiExternalLink />
          </CartBarButton>
        </CartBar>
      </CartItemContainer>
      <Divider />
    </ContentLimit>
  )
}
