import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import ndImage from '~/assets/images/nd-vertical.jpg'
import { IProduct } from '~/serverSide/repositories/types'

import { PageTitle } from '../PageTitle'
import { MaskedProductImage } from '../ProductList/MaskedProductImage'
import { Container, Description, ProductImage, Text } from './styles'

type Props = {
  product: IProduct
}
export const ProductPresentation: React.FC<Props> = ({ product }) => {
  const imageWidth = 420
  const { name, imageUrl, description } = product

  return (
    <Container>
      <ProductImage imageWidth={imageWidth}>
        <MaskedProductImage actived={product.actived} width={imageWidth}>
          <img src={imageUrl || ndImage} alt={name} />
        </MaskedProductImage>
      </ProductImage>
      <Description themeColor="primary" align="right">
        <PageTitle title={product?.name} align="right" />
        <Text align="right">
          Material: <strong> </strong>
          <br />
          Tamanho nominal: <strong> </strong>
          <br />
        </Text>
        {ReactHtmlParser(description)}
      </Description>
    </Container>
  )
}
