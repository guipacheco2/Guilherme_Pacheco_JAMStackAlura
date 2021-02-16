import React from 'react'
import styled from 'styled-components'

const StyledCardTitle = styled.div`
  padding: 8px;
`

interface CardTitleProps {
  children?: React.ReactNode
}

export function CardTitle({ children }: CardTitleProps): JSX.Element {
  return <StyledCardTitle>{children}</StyledCardTitle>
}
