import React from 'react'
import styled from 'styled-components'

const StyledCardContent = styled.div`
  flex: 1;
  padding: 8px;
`

interface CardContentProps {
  children?: React.ReactNode
}

export function CardContent({ children }: CardContentProps): JSX.Element {
  return <StyledCardContent>{children}</StyledCardContent>
}
