import { AppProps } from 'next/dist/next-server/lib/router/router'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { ThemeProvider } from '../theme'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Instalura</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
