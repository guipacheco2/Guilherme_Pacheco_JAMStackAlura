import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { ThemeProvider } from '../theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Instalura</title>
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
