import Link from 'next/link'
import React from 'react'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { LogoCircleSvg } from '../Images/LogoCircleSvg'
import { CategoryDescription, CategoryIcon, CategoryItemContainer } from './styles'
import { ICategory } from './types'

export const CategoryItem: React.FC<ICategory> = ({ label, image }) => {
  const { theme } = useAppTheme()
  return (
    <Link passHref={true} href="/categories">
      <CategoryItemContainer>
        <CategoryIcon>
          <LogoCircleSvg size={64} />
          <img src={image} alt={label} />
        </CategoryIcon>
        <CategoryDescription colorLabel={theme.colors.primary}>{label}</CategoryDescription>
      </CategoryItemContainer>
    </Link>
  )
}
