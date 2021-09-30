import styled from 'styled-components'

import { VariantColorsTypes } from '../AppThemeProvider/types'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: ${({ theme }) => theme.spacing.l}px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const ProductImage = styled.div<{ imageWidth: number }>`
  width: ${({ imageWidth }) => imageWidth}px;
  max-width: 100%;
`

export const Description = styled.div<{ themeColor: VariantColorsTypes; align?: 'left' | 'right' | 'center' }>`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ theme, themeColor }) => theme.colors[themeColor]};
  text-align: ${({ align = 'left' }) => align};
  p,
  h1,
  h2,
  h3,
  h4 {
    padding: ${({ theme }) => theme.spacing.m}px 0;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    display: block;
    font-size: 20px;
  }
  p {
    font-size: 16px;
  }
`

export const Text = styled.p<{ align?: 'left' | 'right' | 'center' }>`
  text-align: ${({ align = 'left' }) => align};
`
