import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

export const StyledLink = styled.a`
  text-decoration: none;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`

interface LinkProps {
  href: string
  children: React.ReactNode
}

export function Link({ children, href, ...props }: LinkProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  )
}
