import React from 'react'
import styled, { css } from 'styled-components'

const StyledProjectDetailScreenImage = styled.div(({ theme }) => {
  return css`
    width: 100%;
    padding: 32px 0;
    background: ${theme.colors.primary.light};
    border: 1px solid ${theme.colors.primary.main};
  `
})

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
`

interface ProjectDetailScreenImageProps {
  src: string
}

export function ProjectDetailScreenImage({
  src,
}: ProjectDetailScreenImageProps): JSX.Element {
  return (
    <StyledProjectDetailScreenImage>
      <StyledImage src={src} loading="lazy" />
    </StyledProjectDetailScreenImage>
  )
}
