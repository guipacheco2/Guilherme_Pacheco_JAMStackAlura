import {
  DefaultTheme,
  FlattenInterpolation,
  SimpleInterpolation,
  ThemeProps,
} from 'styled-components'
import { BreakpointKeys } from '../breakpoints'

export type ResponsiveBreakpoints<T> = T | Partial<Record<BreakpointKeys, T>>

type Styled =
  | SimpleInterpolation
  | FlattenInterpolation<ThemeProps<DefaultTheme>>

export function createBreakpoints<Value = string | number>(
  value: ResponsiveBreakpoints<Value>,
  fn: (value: Value) => Styled,
): Record<string, Styled> {
  const breakpoints = Object.entries(value).reduce<Record<string, Styled>>(
    (sum, [breakpoint, v]) => {
      sum[breakpoint] = fn(v)
      return sum
    },
    {},
  )

  return breakpoints
}
