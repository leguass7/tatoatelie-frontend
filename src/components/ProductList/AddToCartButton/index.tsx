import React, { useCallback, memo } from 'react'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { CartButtonSvg } from '~/components/Images/CartButtonSvg'

import { ButtonAdd } from '../styles'

type Props = {
  onClick?: () => void
}
const Button: React.FC<Props> = ({ onClick }) => {
  const { theme } = useAppTheme()
  const handleClick = useCallback(() => {
    if (onClick) onClick()
  }, [onClick])
  return (
    <ButtonAdd onClick={handleClick} bgColor={theme.colors.contrast}>
      <CartButtonSvg size={100} lineColor={theme.colors.primary} />
    </ButtonAdd>
  )
}

export const AddToCartButton = memo(Button)
