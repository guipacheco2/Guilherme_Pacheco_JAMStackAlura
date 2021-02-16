// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
}

export type Breakpoints = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoints[]
