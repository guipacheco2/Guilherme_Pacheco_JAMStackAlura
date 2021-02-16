export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Breakpoints = Record<BreakpointKeys, number>

// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const breakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
}

export const breakpointNames = Object.keys(breakpoints) as BreakpointKeys[]
