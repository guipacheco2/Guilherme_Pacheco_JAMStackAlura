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

export interface StyledTypographyProps {
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
  children: React.ReactNode
  as?: C
}

export function Typography<C extends React.ElementType = 'span'>({
  as,
  variant,
  onColor,
  textAlign,
  children,
}: TypographyProps<C> &
  Omit<React.ComponentProps<C>, keyof TypographyProps>): JSX.Element {
  return (
    <StyledTypography
      as={as as never}
      variant={variant}
      onColor={onColor}
      textAlign={textAlign}
    >
      {children}
    </StyledTypography>
  )
}
