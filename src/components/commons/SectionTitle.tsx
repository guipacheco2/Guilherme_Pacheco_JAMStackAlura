import React from 'react'
import styled from 'styled-components'

const StyledSectionTitle = styled.div`
  padding: 32px;
`

interface SectionTitleProps {
  children?: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps): JSX.Element {
  return <StyledSectionTitle>{children}</StyledSectionTitle>
}
