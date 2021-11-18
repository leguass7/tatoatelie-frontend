import styled from 'styled-components'

export const CartTitle = styled.h2`
  padding: 0;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
`

export const CartContainer = styled.div<{ textColor?: string }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ textColor = 'inherit' }) => textColor};
  ${CartTitle} {
    color: ${({ textColor = 'inherit' }) => textColor};
  }
`
