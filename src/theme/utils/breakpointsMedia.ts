import { css, FlattenSimpleInterpolation } from 'styled-components'
import { BreakpointKeys, breakpointNames, breakpoints } from '../breakpoints'

export function breakpointsMedia(
  cssByBreakpoint: Partial<Record<BreakpointKeys, FlattenSimpleInterpolation>>,
): FlattenSimpleInterpolation[] {
  return breakpointNames
    .filter((breakpointName) => Boolean(cssByBreakpoint[breakpointName]))
    .map((breakpointName) => {
      return css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `
    })
}
