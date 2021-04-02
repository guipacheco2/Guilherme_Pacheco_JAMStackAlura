import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  ColorKeys,
  createBreakpoints,
  propsToStyle,
  ResponsiveBreakpoints,
  TypographyVariantKeys,
} from '../../theme'
import { Link } from '../commons'

export interface StyledTypographyProps {
  htmlFor?: string
  surfaceColor: ColorKeys
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
  variant:
    | TypographyVariantKeys
    | { md: TypographyVariantKeys; xs: TypographyVariantKeys }
}

const StyledTypography = styled.span<StyledTypographyProps>(
  ({ surfaceColor, textAlign, theme, variant }) => {
    return css`
      ${() => {
        if (typeof variant === 'string') {
          return theme.typographyVariants[variant]
        }

        return breakpointsMedia(
          createBreakpoints(variant, (v) => theme.typographyVariants[v]),
        )
      }}
      color: ${theme.colors[surfaceColor].contrastText};
      ${propsToStyle({ textAlign })}
    `
  },
)

interface TypographyProps<C extends React.ElementType = React.ElementType>
  extends StyledTypographyProps {
  as?: C
  children?: React.ReactNode
  href?: string
}

export type TypographyPropsGeneric<
  C extends React.ElementType
> = TypographyProps<C> & Omit<React.ComponentProps<C>, keyof TypographyProps>

export function Typography<C extends React.ElementType = 'span'>({
  as,
  children,
  href,
  htmlFor,
  surfaceColor,
  textAlign,
  variant,
}: TypographyPropsGeneric<C>): JSX.Element {
  if (href) {
    return (
      <Link href={href}>
        <StyledTypography
          as={as as never}
          variant={variant}
          htmlFor={htmlFor}
          surfaceColor={surfaceColor}
          textAlign={textAlign}
        >
          {children}
        </StyledTypography>
      </Link>
    )
  }

  return (
    <StyledTypography
      as={as as never}
      variant={variant}
      htmlFor={htmlFor}
      surfaceColor={surfaceColor}
      textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  )
}
