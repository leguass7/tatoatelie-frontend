import styled, { css } from 'styled-components'

import type { FlexOneProps } from '~/styles/styledTypes'

type WebFlexProps = FlexOneProps & {
  colorText?: string
  height?: string | number
}

export const View = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: nowrap;
  border: 1px solid #00f;
`

export const BoxCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`

export const FlexOne = styled.div<WebFlexProps>`
  width: ${({ width = 'auto' }) => width};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  align-content: ${({ align = 'flex-start' }) => align};
  margin-top: ${({ theme, topMargin = 0, verticalSpaced }) =>
    verticalSpaced && !topMargin ? theme.spacing.l : topMargin}px;
  margin-bottom: ${({ theme, bottomMargin = 0, verticalSpaced }) =>
    verticalSpaced ? theme.spacing.l : bottomMargin}px;
  margin-left: ${({ theme, leftMargin = 0, horizontalSpaced }) => (horizontalSpaced ? theme.spacing.l : leftMargin)}px;
  margin-right: ${({ theme, rightMargin = 0, horizontalSpaced }) =>
    horizontalSpaced ? theme.spacing.l : rightMargin}px;
  padding-right: ${({ horizontalPad }) => horizontalPad || 0}px;
  padding-left: ${({ horizontalPad }) => horizontalPad || 0}px;
  background-color: ${({ backgroundTheme, theme }) =>
    backgroundTheme ? theme.colors[backgroundTheme] : 'transparent'};
  color: ${({ colorText }) => colorText || 'inherit'};
  height: ${({ height = 'auto' }) => (typeof height === 'number' ? `${height}px` : height)};

  ${({ grow }) =>
    grow
      ? css`
          flex: ${grow};
        `
      : null};
`

export const ContentLimit = styled.div<{ widthLimit?: number; horizontalPad?: number }>`
  max-width: 100%;
  width: ${({ widthLimit = 900 }) => widthLimit}px;
  padding: 0;
  margin: 0 auto;
  padding: 0 ${({ horizontalPad = 0 }) => horizontalPad}px;
`
