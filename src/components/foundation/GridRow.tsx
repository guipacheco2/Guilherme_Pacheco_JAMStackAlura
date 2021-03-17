import React from 'react'
import styled, { css, CSSProperties } from 'styled-components'
import { propsToStyle, ResponsiveBreakpoints } from '../../theme'

interface StyledGridRowProps {
  marginTop?: ResponsiveBreakpoints<CSSProperties['marginTop']>
  fullHeight?: boolean
}

const StyledGridRow = styled.div<StyledGridRowProps>(
  ({ fullHeight, marginTop }) => {
    return css`
      display: flex;
      flex-wrap: wrap;
      margin-right: -16px;
      margin-left: -16px;
      height: ${fullHeight ? '100%' : 'auto'};
      ${propsToStyle({
        marginTop,
      })}
    `
  },
)

interface GridRowProps extends StyledGridRowProps {
  children: React.ReactNode
}

export function GridRow({
  fullHeight,
  marginTop,
  children,
}: GridRowProps): JSX.Element {
  return (
    <StyledGridRow marginTop={marginTop} fullHeight={fullHeight}>
      {children}
    </StyledGridRow>
  )
}
