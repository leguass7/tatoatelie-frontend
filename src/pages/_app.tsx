import '../styles/globals.css'
import '~/services/gtag'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'

import { AppThemeProvider } from '~/components/AppThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </Provider>
  )
}
export default MyApp
