import styled from 'styled-components'

import { VariantColorsTypes } from '../AppThemeProvider/types'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: ${({ theme }) => theme.spacing.l}px;
  border: 1px dashed #000;
`

export const ProductImage = styled.div<{ imageWidth: number }>`
  width: ${({ imageWidth }) => imageWidth}px;
  max-width: 100%;
  border: 1px dashed #00f;
`

export const Description = styled.div<{ themeColor: VariantColorsTypes }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.l}px;
  border: 1px dashed #0f0;
  color: ${({ theme, themeColor }) => theme.colors[themeColor]};
`

export const Text = styled.p<{ align?: 'left' | 'right' | 'center' }>`
  text-align: ${({ align = 'left' }) => align};
`
