export type BreakpointKeys = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export type Breakpoints = Record<BreakpointKeys, number>

// https://material.io/design/layout/responsive-layout-grid.html#breakpoints
export const breakpoints: Breakpoints = {
  lg: 1440,
  md: 1024,
  sm: 600,
  xl: 1920,
  xs: 0,
}

export const breakpointNames = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
] as BreakpointKeys[]
