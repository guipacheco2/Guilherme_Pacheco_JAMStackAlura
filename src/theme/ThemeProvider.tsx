import React from 'react'
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
    <ColorSchemaContextProvider>
      <ThemeProviderWithColorMode>{children}</ThemeProviderWithColorMode>
    </ColorSchemaContextProvider>
  )
}
