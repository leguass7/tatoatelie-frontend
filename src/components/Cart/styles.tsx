import styled from 'styled-components'

// import { darken } from '~/helpers/colors'

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

// export const CartButtonDone = styled.button<{ textColor?: string; bgColor?: string }>`
//   display: inline-block;
//   cursor: pointer;
//   padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
//   color: ${({ textColor = 'inherit' }) => textColor};
//   &:hover {
//     color: ${({ textColor }) => (textColor ? darken(textColor, 0.5) : 'inherit')};
//   }
// `
