import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import {
  breakpointsMedia,
  propsToStyle,
  ResponsiveBreakpoints,
} from '../../theme'
import { BreakpointKeys, breakpointNames } from '../../theme/breakpoints'

export interface StyledGridContainerProps {
  alignItems?: ResponsiveBreakpoints<CSSProperties['alignItems']>
  display?: ResponsiveBreakpoints<CSSProperties['display']>
  flex?: ResponsiveBreakpoints<CSSProperties['flex']>
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  maxWidth?: BreakpointKeys
}

const StyledGridContainer = styled.div<StyledGridContainerProps>(
  ({ alignItems, display, flex, marginTop, maxWidth = 'xl', theme }) => {
    const breakpointIndex = breakpointNames.indexOf(maxWidth)

    return css`
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      ${breakpointsMedia({
        lg:
          breakpointIndex >= 3
            ? css`
                max-width: ${theme.breakpoints.lg}px;
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
        sm:
          breakpointIndex >= 1
            ? css`
                max-width: ${theme.breakpoints.sm}px;
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
        xs:
          breakpointIndex >= 0
            ? css`
                max-width: initial;
                padding-right: 16px;
                padding-left: 16px;
              `
            : css``,
      })}
      ${propsToStyle({ alignItems, display, flex, marginTop })}
    `
  },
)

interface GridContainerProps extends StyledGridContainerProps {
  children: React.ReactNode
}

export function GridContainer({
  alignItems,
  children,
  display,
  flex,
  marginTop,
  maxWidth,
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
