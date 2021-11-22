import styled from 'styled-components'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'

import { ServerEmptySvg } from '../Images/ServerEmptySvg'

const Container = styled.div<{ color: string }>`
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  max-width: 100%;
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

export const EmptyCart: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <Container color={theme.colors.textDark}>
      <div>
        <ServerEmptySvg width={180} />
        <Message>Oh! Seu carrinho está vazio.</Message>
      </div>
    </Container>
  )
}
