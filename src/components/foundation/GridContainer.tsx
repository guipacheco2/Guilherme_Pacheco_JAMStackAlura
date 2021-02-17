import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'

export interface StyledGridContainerProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
}

const StyledGridContainer = styled.div<StyledGridContainerProps>(
  ({ display, marginTop, flex, theme }) => {
    return css`
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      ${breakpointsMedia({
        xs: css`
          max-width: initial;
          padding-right: 16px;
          padding-left: 16px;
        `,
        sm: css`
          max-width: ${theme.breakpoints.sm}px;
          padding-right: 24px;
          padding-left: 24px;
        `,
        md: css`
          max-width: ${theme.breakpoints.md}px;
          padding-right: 24px;
          padding-left: 24px;
        `,
        lg: css`
          max-width: ${theme.breakpoints.lg}px;
          padding-right: 24px;
          padding-left: 24px;
        `,
        xl: css`
          max-width: ${theme.breakpoints.xl}px;
          padding-right: 24px;
          padding-left: 24px;
        `,
      })}
      ${propsToStyle({ display, marginTop, flex })}
    `
  },
)

interface GridContainerProps extends StyledGridContainerProps {
  children: React.ReactNode
}

export function GridContainer({
  flex,
  display,
  marginTop,
  children,
}: GridContainerProps): JSX.Element {
  return (
    <StyledGridContainer flex={flex} display={display} marginTop={marginTop}>
      {children}
    </StyledGridContainer>
  )
}
