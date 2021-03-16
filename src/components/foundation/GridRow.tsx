import React from 'react'
import styled, { css } from 'styled-components'

interface StyledGridRowProps {
  fullHeight?: boolean
}

const StyledGridRow = styled.div<StyledGridRowProps>(({ fullHeight }) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    margin-right: -16px;
    margin-left: -16px;
    height: ${fullHeight ? '100%' : 'auto'};
  `
})

interface GridRowProps extends StyledGridRowProps {
  children: React.ReactNode
}

export function GridRow({ fullHeight, children }: GridRowProps): JSX.Element {
  return <StyledGridRow fullHeight={fullHeight}>{children}</StyledGridRow>
}
