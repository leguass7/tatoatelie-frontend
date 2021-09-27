import { IThemeSpacing, IAppTheme } from './types'

const rounded = 5
const spacing: IThemeSpacing = {
  s: 4,
  m: 6,
  l: 10,
  xl: 14
}

export const appThemeDark: IAppTheme = {
  colors: {
    primary: '#b07b80',
    secondary: '#F7ABAF',
    contrast: '#BB1806',
    text: '#ffffff',
    white: '#FFFFFF',
    black: '#000000',
    border: '#ccc',
    shadow: '#C3C3C3',
    textDark: '#808080',
    background: '#EDEDED'
  },
  spacing,
  rounded,
  borderWidth: 1
}

export const appThemeLigth: IAppTheme = {
  colors: {
    primary: '#b07b80',
    secondary: '#F7ABAF',
    contrast: '#BB1806',
    text: '#ffffff',
    white: '#FFFFFF',
    black: '#000000',
    border: '#ccc',
    shadow: '#C3C3C3',
    textDark: '#808080',
    background: '#EDEDED'
  },
  spacing,
  rounded,
  borderWidth: 1
}
