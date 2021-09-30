import React from 'react'
import styled from 'styled-components'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { ServerTimeoutSvg } from '../Images/ServerTimeoutSvg'

const Container = styled.div<{ color: string }>`
  padding: ${({ theme }) => theme.spacing.xl}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: ${({ color }) => color};
  svg {
    display: block;
    margin: 0 auto;
  }
`

const Message = styled.p`
  text-align: center;
  font-size: 22px;
`

export const NoProducts: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <Container color={theme.colors.textDark}>
      <div>
        <ServerTimeoutSvg width={180} />
        <Message>Oh! Produtos ainda não foram cadastrados</Message>
      </div>
    </Container>
  )
}
