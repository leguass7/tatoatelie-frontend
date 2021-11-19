import styled from 'styled-components'

import { darken } from '~/helpers/colors'

export const CartItemDescription = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    flex: 1;
  }
`

export const CartItemContainer = styled.div``

export const CartItemImage = styled.div``

export const CartBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: ${({ theme }) => theme.spacing.m}px;
`

export const CartBarButton = styled.button<{ textColor?: string }>`
  display: inline-block;
  padding: 0;
  margin: 0;
  width: 32px;
  height: 32px;
  text-align: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: ${({ textColor = 'inherit' }) => textColor};
  &:hover {
    color: ${({ textColor }) => (textColor ? darken(textColor, 0.5) : 'inherit')};
  }
`
