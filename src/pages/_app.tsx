import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'
import { CustomThemeProvider } from '../theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}
