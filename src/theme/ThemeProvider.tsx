import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createTheme } from './createTheme'
import { GlobalStyle } from './GlobalStyle'

export interface ThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <StyledThemeProvider theme={createTheme()}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  )
}
