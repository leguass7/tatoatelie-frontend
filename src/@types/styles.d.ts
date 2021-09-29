import 'styled-components'
import { IAppTheme } from '~/components/AppThemeProvider/types'

declare module 'styled-components' {
  export interface DefaultTheme extends IAppTheme {}
}
