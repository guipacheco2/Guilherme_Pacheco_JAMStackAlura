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
  variant:
    | TypographyVariantKeys
    | { xs: TypographyVariantKeys; md: TypographyVariantKeys }
  onColor: ColorKeys
  textAlign?: ResponsiveBreakpoints<CSSProperties['textAlign']>
}

const StyledTypography = styled.span<StyledTypographyProps>(
  ({ variant, theme, onColor, textAlign }) => {
    return css`
      ${() => {
        if (typeof variant === 'string') {
          return theme.typographyVariants[variant]
        }

        return breakpointsMedia(
          createBreakpoints(variant, (v) => theme.typographyVariants[v]),
        )
      }}
      color: ${theme.colors[onColor].contrastText};
      ${propsToStyle({ textAlign })}
    `
  },
)

interface TypographyProps<C extends React.ElementType = React.ElementType>
  extends StyledTypographyProps {
  children?: React.ReactNode
  as?: C
  href?: string
}

export type TypographyPropsGeneric<
  C extends React.ElementType
> = TypographyProps<C> & Omit<React.ComponentProps<C>, keyof TypographyProps>

export function Typography<C extends React.ElementType = 'span'>({
  as,
  variant,
  onColor,
  textAlign,
  children,
  htmlFor,
  href,
}: TypographyPropsGeneric<C>): JSX.Element {
  if (href) {
    return (
      <Link href={href}>
        <StyledTypography
          as={as as never}
          variant={variant}
          htmlFor={htmlFor}
          onColor={onColor}
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
      onColor={onColor}
      textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  )
}
