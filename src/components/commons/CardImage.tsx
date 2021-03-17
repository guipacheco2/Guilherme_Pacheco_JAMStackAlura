import React from 'react'
import styled from 'styled-components'

const StyledCardImage = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex: 2;
`

const StyledImage = styled.img`
  flex: 1;
  flex-wrap: wrap;
  object-fit: cover;
`

interface CardImageProps {
  src: string
}

export function CardImage({ src }: CardImageProps): JSX.Element {
  return (
    <StyledCardImage>
      <StyledImage src={src} loading="lazy" />
    </StyledCardImage>
  )
}
