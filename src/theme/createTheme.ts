import { DefaultTheme } from 'styled-components'
import { breakpoints, Breakpoints } from './breakpoints'
import { Colors, dark, light } from './colors'
import { ColorSchemaTypes } from './ColorSchemaContext'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: Breakpoints
    colors: Colors
    schema: ColorSchemaTypes
    typographyVariants: TypographyVariants
  }
}

const colors = { dark, light }

export function createTheme(colorSchema: ColorSchemaTypes): DefaultTheme {
  return {
    breakpoints,
    colors: colors[colorSchema],
    schema: colorSchema,
    typographyVariants,
  }
}
