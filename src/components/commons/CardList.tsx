import React from 'react'
import styled from 'styled-components'

const StyledCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface CardListProps {
  children?: React.ReactNode
}

export function CardList({ children }: CardListProps): JSX.Element {
  return <StyledCardList>{children}</StyledCardList>
}
