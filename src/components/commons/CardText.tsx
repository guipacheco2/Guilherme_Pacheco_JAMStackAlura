import React from 'react'
import styled from 'styled-components'

const StyledCardText = styled.div`
  padding: 8px;
`

interface CardTextProps {
  children?: React.ReactNode
}

export function CardText({ children }: CardTextProps): JSX.Element {
  return <StyledCardText>{children}</StyledCardText>
}
