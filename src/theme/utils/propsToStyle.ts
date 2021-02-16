import { css, FlattenSimpleInterpolation } from 'styled-components'
import { breakpointsMedia } from './breakpointsMedia'
import { createBreakpoints, ResponsiveBreakpoints } from './createBreakpoint'

export function propsToStyle(
  props: Record<string, ResponsiveBreakpoints<string | number>>,
): FlattenSimpleInterpolation[] {
  const entries = Object.entries(props)

  if (entries.length === 0) {
    throw new Error('Utilize com pelo menos uma prop')
  }

  const filledEntries = entries.filter((entry) => entry[1])

  if (filledEntries.length === 0) {
    return []
  }

  const styles = filledEntries.map(([name, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      return css({ [name]: value })
    }

    const breakpoints = createBreakpoints(value, (v) => css({ [name]: v }))

    return breakpointsMedia(breakpoints)
  })

  return styles
}
