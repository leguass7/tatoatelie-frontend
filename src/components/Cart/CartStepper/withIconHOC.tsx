import { StepIconProps } from '@mui/material'
import { IconType } from 'react-icons'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'

export const withIconHOC = (Icon: IconType) => {
  const IconReturn = (props: StepIconProps) => {
    const { theme } = useAppTheme()
    const { active, completed, error } = props

    const getColor = () => {
      if (completed) return theme.colors.success
      if (active) return theme.colors.primary
      if (error) return theme.colors.errors
      return theme.colors.border
    }

    return <Icon color={getColor()} />
  }
  return IconReturn
}
