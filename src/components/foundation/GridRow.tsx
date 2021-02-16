import React from 'react'
import styled from 'styled-components'

const StyledGridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
`

interface GridRowProps {
  children: React.ReactNode
}

export function GridRow({ children }: GridRowProps): JSX.Element {
  return <StyledGridRow>{children}</StyledGridRow>
}
