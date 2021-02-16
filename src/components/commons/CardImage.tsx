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

// random image with different sizes
const src = `https://source.unsplash.com/collection/people/${
  300 + Math.floor(Math.random() * 100)
}x${300 + Math.floor(Math.random() * 100)}`

export function CardImage(): JSX.Element {
  return (
    <StyledCardImage>
      <StyledImage src={src} loading="lazy" />
    </StyledCardImage>
  )
}
