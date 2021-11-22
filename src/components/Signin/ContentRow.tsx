import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import logo from '~/assets/images/logo-face.png'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { FormButton } from '../Forms/FormButton'
import { FlexRow, Paragraph } from '../styled'
import { ButtonAuthSignIn } from './ButtonAuthSignIn'
import { FormLogin } from './FormLogin'

const LogoContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 100%;
  border: 0;
  margin-bottom: ${({ theme }) => theme.spacing.l}px;
  img {
    display: block;
    width: 92px;
    max-width: 100%;
    margin: 0 auto;
  }
`

const Div = styled.div<{ hidden?: boolean }>`
  align-self: center;
  width: 50%;
  max-width: 100%;
  min-width: 300px;
  border: 0;
  padding: ${({ theme }) => `${0}px ${theme.spacing.l}px`};
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};

  @media (max-width: 299px) {
    width: 100%;
    min-width: 100%;
  }
`

const RowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border: 0;
`

export const ContentRow: React.FC = ({ children }) => {
  const { theme } = useAppTheme()
  const [session] = useSession()

  const handleLogout = () => {
    signOut()
  }
  return (
    <RowContainer>
      <Div>
        {children || (
          <LogoContainer>
            <img src={logo} alt="Tato Ateliê" />
          </LogoContainer>
        )}
        {!session ? (
          <>
            <Paragraph align="center" textColor={theme.colors.primary} bold>
              Faça login utilizando as redes
            </Paragraph>
            <FlexRow verticalSpaced>
              <ButtonAuthSignIn provider="google" />
            </FlexRow>
            <FlexRow verticalSpaced>
              <ButtonAuthSignIn provider="instagram" />
            </FlexRow>
          </>
        ) : (
          <>
            <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
              <FormButton label="Fazer logoff" bold type="button" onClick={handleLogout} />
            </Paragraph>
          </>
        )}

        <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
          <Link href="/politica">Política de privacidade</Link> | <Link href="/termos">Termos de uso</Link>
        </Paragraph>
      </Div>
      <Div hidden={!!session}>
        <FormLogin />
      </Div>
    </RowContainer>
  )
}
