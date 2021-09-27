import 'styled-components'
import type { ITheme } from '../styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
