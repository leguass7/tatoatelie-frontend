import styled, { css } from 'styled-components'

import { alpha, darken } from '~/helpers/colors'
import { FlexJustify } from '~/styles/styledTypes'

export const Group = styled.div<{ justify?: FlexJustify }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.m}px;
  justify-content: ${({ justify = 'flex-start' }) => justify};
`

export const InputContainer = styled.div<{ disabled?: boolean; grow?: number }>`
  display: block;
  max-width: 100%;
  padding: ${({ theme }) => `0px 0px ${theme.spacing.m}px 0px`};
  ${({ disabled }) =>
    disabled
      ? css`
          filter: grayscale(100%);
        `
      : null}
  ${({ grow }) =>
    grow
      ? css`
          flex: ${grow};
        `
      : null}
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
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.rounded}px;
  margin: 0 auto;
  display: block;
  width: 100%;
  max-width: 100%;
  outline: none;
  padding: ${({ theme }) => `${theme.spacing.s}px ${theme.spacing.m}px`};
  font-family: 'Maiandra GD';
`

export const SelectField = styled.select`
  border-width: 1px;
  border-style: solid;
  box-shadow: none;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.rounded}px;
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

  ${SelectField} {
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

export const SpanError = styled.span`
  color: #f00;
  font-size: 11px;
  transform: translateY(-4px);
  position: relative;
  display: inline-block;
`

export const Button = styled.button<{
  bgColor: string
  variant: string
  bold?: boolean
  textColor: string
  disabled?: boolean
  textSize?: number
}>`
  display: inline-block;
  border-radius: ${({ theme }) => theme.spacing.l}px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;
  padding: ${({ theme }) => `${theme.spacing.m}px ${theme.spacing.l}px`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ textSize }) => textSize}px;

  font-family: 'Maiandra GD', '-apple-system', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  ${({ disabled }) =>
    disabled
      ? css`
          filter: grayscale(100%);
        `
      : null}

  ${({ variant = 'text', bgColor = 'transparent', textColor, disabled }) => {
    if (variant === 'text') {
      return css`
        background-color: transparent;
        border-color: ${bgColor};
        color: ${bgColor};
        &:hover {
          background-color: ${alpha(bgColor, 0.2)}};
          filter: ${disabled ? `grayscale(100%)` : 'none'};
        }
      `
    } else {
      return css`
        border-color: ${bgColor};
        background-color: ${bgColor};
        color: ${textColor};
        &:hover {
          background-color: ${darken(bgColor, 0.5)}};
          filter: ${disabled ? `grayscale(100%)` : 'none'};
        }
      `
    }
  }}
`
