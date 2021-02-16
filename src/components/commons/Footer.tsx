import React from 'react'
import styled, { css } from 'styled-components'

const StyledFooter = styled.div(({ theme }) => {
  return css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary.main,
  })
})

interface FooterProps {
  children?: React.ReactNode
}

export function Footer({ children }: FooterProps): JSX.Element {
  return <StyledFooter>{children}</StyledFooter>
}
