import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'

const theme = {}

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}
