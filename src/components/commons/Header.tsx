import React from 'react'
import styled, { css } from 'styled-components'

const StyledHeader = styled.div(() => {
  return css({
    display: 'flex',
    flexDirection: 'column',
  })
})

interface HeaderProps {
  children?: React.ReactNode
}

export function Header({ children }: HeaderProps): JSX.Element {
  return <StyledHeader>{children}</StyledHeader>
}
