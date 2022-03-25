import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import '~/styles/globals.css'
import '~/services/gtag'
import { Provider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

import { AppThemeProvider } from '~/components/AppThemeProvider'
import { store, persistor } from '~/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppThemeProvider>
            <Component {...pageProps} />
            <ToastContainer />
          </AppThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </Provider>
  )
}
export default MyApp
