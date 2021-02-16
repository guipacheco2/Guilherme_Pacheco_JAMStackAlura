// https://material.io/design/typography/the-type-system.html#type-scale

import { CSSProperties } from 'styled-components'

type TypographyVariant = {
  fontSize: number
  fontWeight: number
  letterSpacing?: number
  textTransform?: CSSProperties['textTransform']
}

export type TypographyVariantKeys =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'bodyText1'
  | 'bodyText2'
  | 'button'
  | 'caption'
  | 'overline'

export type TypographyVariants = Record<
  TypographyVariantKeys,
  TypographyVariant
>

export const typographyVariants: TypographyVariants = {
  headline1: {
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: -1.5,
  },
  headline2: {
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: -0.5,
  },
  headline3: {
    fontSize: 48,
    fontWeight: 400,
  },
  headline4: {
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  headline5: {
    fontSize: 24,
    fontWeight: 400,
  },
  headline6: {
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: 0.15,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.15,
  },
  subtitle2: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 0.1,
  },
  bodyText1: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.5,
  },
  bodyText2: {
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: 0.25,
  },
  button: {
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: 1.25,
    textTransform: 'uppercase',
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: 0.4,
  },
  overline: {
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
}
