import { DefaultTheme } from 'styled-components'
import { breakpoints } from './breakpoints'
import { Colors, light } from './colors'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints
    fontFamily: string
    borderRadius: string
    transition: string
    colors: Colors
    typographyVariants: TypographyVariants
  }
}

export function createTheme(): DefaultTheme {
  return {
    breakpoints,
    colors: light,
    typographyVariants,
    borderRadius: '12px',
    fontFamily: "'Rubik', sans-serif",
    transition: '200ms ease-in-out',
  }
}
