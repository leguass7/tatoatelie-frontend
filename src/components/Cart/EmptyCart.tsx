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

const Message = styled.p<{ textSize: number }>`
  text-align: center;
  font-size: ${({ textSize }) => textSize}px;
`
type Props = {
  message?: string | string[]
  textSize?: number
}
export const EmptyCart: React.FC<Props> = ({ message = 'Oh! Seu carrinho está vazio.', textSize = 22, children }) => {
  const { theme } = useAppTheme()

  const renderMessage = () => {
    return !Array.isArray(message)
      ? message
      : message.map(m => (
          <>
            {m}
            <br />
          </>
        ))
  }
  return (
    <Container color={theme.colors.textDark}>
      <div>
        <ServerEmptySvg width={180} />
        {children || <Message textSize={textSize}>{renderMessage()}</Message>}
      </div>
    </Container>
  )
}
