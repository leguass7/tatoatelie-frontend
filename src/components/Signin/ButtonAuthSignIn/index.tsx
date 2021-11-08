import { signIn, signOut, useSession } from 'next-auth/client'
import React, { useMemo } from 'react'
import { FaGoogle, FaInstagram } from 'react-icons/fa'

import type { VariantColorsTypes } from '~/components/AppThemeProvider/types'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'

import { Button } from './styles'

const providers = {
  google: FaGoogle,
  instagram: FaInstagram
}

export interface ButtonAuthSignInProps {
  spacing?: number
  themeColor?: VariantColorsTypes
  provider: keyof typeof providers
}

export const ButtonAuthSignIn: React.FC<ButtonAuthSignInProps> = ({ themeColor = 'primary', spacing, provider }) => {
  const { theme, matchingBackgroudText } = useAppTheme()
  const [session] = useSession()

  const textColor = matchingBackgroudText(themeColor)
  const Icon = providers[provider]

  const buttonProps = useMemo(() => {
    const name = session && (session?.user?.name || 'Sair')
    return {
      onClick: session ? () => signOut() : () => signIn(provider),
      label: session ? name : `com ${provider}`
    }
  }, [session, provider])

  return (
    <Button onClick={buttonProps.onClick} spacing={spacing} bgColor={theme.colors[themeColor]} textColor={textColor}>
      <Icon /> <span>{buttonProps.label}</span>
    </Button>
  )
}
