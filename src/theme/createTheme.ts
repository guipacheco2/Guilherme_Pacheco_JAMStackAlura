import { DefaultTheme } from 'styled-components'
import { breakpoints, Breakpoints } from './breakpoints'
import { Colors, dark, light } from './colors'
import { ColorSchemaTypes } from './ColorSchemaContext'
import { typographyVariants, TypographyVariants } from './typographyVariants'

// https://styled-components.com/docs/api#create-a-declarations-file
declare module 'styled-components' {
  export interface DefaultTheme {
    schema: ColorSchemaTypes
    breakpoints: Breakpoints
    colors: Colors
    typographyVariants: TypographyVariants
  }
}

const colors = { light, dark }

export function createTheme(colorSchema: ColorSchemaTypes): DefaultTheme {
  return {
    schema: colorSchema,
    breakpoints,
    colors: colors[colorSchema],
    typographyVariants,
  }
}
