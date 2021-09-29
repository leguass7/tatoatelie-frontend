import Link from 'next/link'
import React from 'react'

import { ISegment } from '~/serverSide/repositories/segment'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { LogoCircleSvg } from '../Images/LogoCircleSvg'
import { SegmentDescription, SegmentIcon, SegmentItemContainer } from './styles'

export const SegmentItem: React.FC<ISegment> = ({ label, image, customPage, slug }) => {
  const { theme } = useAppTheme()
  const link = customPage ? `/${slug}` : `/segmentation/${slug}`
  return (
    <Link passHref={true} href={link}>
      <SegmentItemContainer>
        <SegmentIcon>
          <LogoCircleSvg size={64} />
          <img src={image} alt={label} />
        </SegmentIcon>
        <SegmentDescription colorLabel={theme.colors.primary}>{label}</SegmentDescription>
      </SegmentItemContainer>
    </Link>
  )
}
