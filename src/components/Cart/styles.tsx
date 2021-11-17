import styled from 'styled-components'

export const CartContainer = styled.div<{ textColor?: string }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ textColor = 'inherit' }) => textColor};
`
