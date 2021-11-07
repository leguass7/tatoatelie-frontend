import styled, { css } from 'styled-components'

import { alpha, darken } from '~/helpers/colors'

export const Group = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.m}px;
`

export const Button = styled.button<{ bgColor: string; variant: string; bold?: boolean; textColor: string }>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.spacing.l}px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

  font-family: 'Maiandra GD', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  ${({ variant = 'text', bgColor = 'transparent', textColor }) => {
    if (variant === 'text') {
      return css`
        background-color: transparent;
        border-color: ${bgColor};
        color: ${bgColor};
        &:hover {
          background-color: ${alpha(bgColor, 0.2)}};
        }
      `
    } else {
      return css`
        border-color: ${bgColor};
        background-color: ${bgColor};
        color: ${textColor};
        &:hover {
          background-color: ${darken(bgColor, 0.5)}};
        }
      `
    }
  }}
`

export const InputContainer = styled.div`
  display: block;
  max-width: 100%;
  padding: ${({ theme }) => `0px 0px ${theme.spacing.m}px 0px`};
`

export const LabelField = styled.label`
  display: inline-block;
  margin: 0;
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing.s}px;
`

export const InputField = styled.input`
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
  border-color: ${({ theme }) => theme.colors.border};
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 100%;
  outline: none;

  padding: ${({ theme }) => `${theme.spacing.s}px ${theme.spacing.m}px`};
  font-family: 'Maiandra GD';
`
export const InputContent = styled.div<{ textSize: number; textColor: string }>`
  padding: 0;
  margin: 0;

  ${InputField} {
    font-size: ${({ textSize }) => textSize}px;
    color: ${({ textColor }) => textColor};
    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }

  ${LabelField} {
    font-size: ${({ textSize }) => Math.ceil(textSize * 0.75)}px;
    color: ${({ textColor }) => textColor};
  }
`
