import React from 'react'
import styled, { css } from 'styled-components'

const StyledHeader = styled.div(() => {
  return css({
    display: 'flex',
    flexDirection: 'column',
  })
})

export function Header({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element {
  return <StyledHeader>{children}</StyledHeader>
}
