import Link from 'next/link'
import React from 'react'

import { Paragraph } from '~/components/styled'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { PageTitle } from '../PageTitle'

export const ExcludeInstructions: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <div>
      <PageTitle title={'Instruções para criar solicitação'} variant="h2" />
      <ol>
        <li>Faça login na sua conta</li>
        <li>
          No Menu principal, clique em <strong>{'"Minhas informações"'}</strong>
        </li>
        <li>
          No final da página clique em <strong>{'"Solicitar exclusão dos meus dados"'}</strong>
        </li>
      </ol>
      <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
        <Link href="/signin">Fazer login</Link>
      </Paragraph>
      <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
        <Link href="/politica">Política de privacidade</Link> | <Link href="/termos">Termos de uso</Link>
      </Paragraph>
    </div>
  )
}
