import Head from 'next/head'
import React, { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  ColorSchemaContextProvider,
  useColorSchema,
} from './ColorSchemaContext'
import { createTheme } from './createTheme'
import { GlobalStyle } from './GlobalStyle'

export interface ThemeProviderProps {
  children: React.ReactNode
}

function ThemeProviderWithColorMode({
  children,
}: ThemeProviderProps): JSX.Element {
  const colorSchema = useColorSchema()

  return (
    <ThemeProvider theme={createTheme(colorSchema)}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export function CustomThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element {
  return (
    <Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ColorSchemaContextProvider>
        <ThemeProviderWithColorMode>{children}</ThemeProviderWithColorMode>
      </ColorSchemaContextProvider>
    </Fragment>
  )
}
