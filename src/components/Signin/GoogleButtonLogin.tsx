import { useSession, signIn, signOut } from 'next-auth/client'
import { useMemo } from 'react'
import { FaGoogle } from 'react-icons/fa'
import styled from 'styled-components'

import { darken } from '~/helpers/colors'

import { VariantColorsTypes } from '../AppThemeProvider/types'
import { useAppTheme } from '../AppThemeProvider/useAppTheme'

const Button = styled.button<{ spacing?: number; bgColor?: string; textColor?: string }>`
  cursor: pointer;
  border: 1px solid ${({ bgColor = 'none' }) => bgColor};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  color: ${({ textColor = 'inherit' }) => textColor};
  font-weight: bold;
  font-size: 16px;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  margin: 0px ${({ spacing }) => spacing || 'auto'}px;
  border-radius: ${({ theme }) => theme.rounded}px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: ${({ theme }) => theme.spacing.l}px;
  &:hover {
    background-color: ${({ bgColor = 'transparent' }) => darken(bgColor, 0.5)};
  }
`
interface GoogleButtonLoginProps {
  spacing?: number
  themeColor?: VariantColorsTypes
}

export const GoogleButtonLogin: React.FC<GoogleButtonLoginProps> = ({ spacing, themeColor = 'primary' }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [session] = useSession()

  const textColor = matchingBackgroudText(themeColor)

  const buttonProps = useMemo(() => {
    const name = session && (session?.user?.name || 'Sair')
    return {
      onClick: session ? () => signOut() : () => signIn('google'),
      label: session ? name : 'com Google'
    }
  }, [session])

  return (
    <Button onClick={buttonProps.onClick} spacing={spacing} bgColor={theme.colors[themeColor]} textColor={textColor}>
      <FaGoogle /> <span>{buttonProps.label}</span>
    </Button>
  )
}
