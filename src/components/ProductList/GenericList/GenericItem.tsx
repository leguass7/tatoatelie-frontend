import Link from 'next/link'
import React, { useState } from 'react'

import ndImage from '~/assets/images/nd-vertical.jpg'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { ProductDescription } from '~/components/ProductList/ProductDescription'
import { ProductLink } from '~/components/ProductList/styles'
import type { IProduct } from '~/serverSide/repositories/types'

import { MaskedGenericImage } from './MaskedGenericImage'
import { GenericItemContainer } from './styles'

type GenericItemProps = IProduct & {}
export const GenericItem: React.FC<GenericItemProps> = ({ name, imageUrl, price, slug, imageMeta = {} }) => {
  const [actived, setActived] = useState(false)
  const { theme } = useAppTheme()

  const image = imageUrl || ndImage

  return (
    <GenericItemContainer space={theme.spacing.l}>
      <Link passHref href={`/product/${slug}`}>
        <ProductLink onMouseOver={() => setActived(true)} onMouseOut={() => setActived(false)}>
          <MaskedGenericImage
            actived={actived}
            imageWidth={imageMeta?.width}
            imageHeight={imageMeta?.height}
            bgImage={image}
          >
            <img src={image} alt={name} />
          </MaskedGenericImage>
          <ProductDescription title={name} price={price} />
        </ProductLink>
      </Link>
    </GenericItemContainer>
  )
}
