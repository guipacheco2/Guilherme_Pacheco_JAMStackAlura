import React from 'react'
import styled, { css } from 'styled-components'

const StyledFooter = styled.footer(({ theme }) => {
  return css({
    backgroundColor: theme.colors.primary.main,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 12,
  })
})

interface FooterProps {
  children?: React.ReactNode
}

export function Footer({ children }: FooterProps): JSX.Element {
  return <StyledFooter>{children}</StyledFooter>
}
