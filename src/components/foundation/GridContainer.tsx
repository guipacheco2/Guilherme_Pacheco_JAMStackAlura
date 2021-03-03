import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'
import { BreakpointKeys } from '../../theme/breakpoints'

export interface StyledGridContainerProps {
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  maxWidth?: BreakpointKeys
}

const StyledGridContainer = styled.div<StyledGridContainerProps>(
  ({ display, marginTop, flex, alignItems, theme, maxWidth = 'xl' }) => {
    const breakpointIndex = Object.keys(theme.breakpoints).indexOf(maxWidth)

    return css`
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      ${breakpointsMedia({
        xs:
          breakpointIndex >= 0
            ? css`
                max-width: initial;
                padding-right: 16px;
                padding-left: 16px;
              `
            : css``,
        sm:
          breakpointIndex >= 1
            ? css`
                max-width: ${theme.breakpoints.sm}px;
                padding-right: 24px;
                padding-left: 24px;
              `
            : css``,
        md:
          breakpointIndex >= 2
            ? css`
                max-width: ${theme.breakpoints.md}px;
                padding-right: 24px;
                padding-left: 24px;
              `
            : css``,
        lg:
          breakpointIndex >= 3
            ? css`
                max-width: ${theme.breakpoints.lg}px;
                padding-right: 24px;
                padding-left: 24px;
              `
            : css``,
        xl:
          breakpointIndex >= 4
            ? css`
                max-width: ${theme.breakpoints.xl}px;
                padding-right: 24px;
                padding-left: 24px;
              `
            : css``,
      })}
      ${propsToStyle({ display, marginTop, flex, alignItems })}
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
  alignItems,
  maxWidth,
  children,
}: GridContainerProps): JSX.Element {
  return (
    <StyledGridContainer
      alignItems={alignItems}
      flex={flex}
      maxWidth={maxWidth}
      display={display}
      marginTop={marginTop}
    >
      {children}
    </StyledGridContainer>
  )
}
