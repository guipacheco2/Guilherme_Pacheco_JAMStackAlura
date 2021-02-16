import React from 'react'
import styled, { css } from 'styled-components'

const StyledMenuItem = styled.a(() => {
  return css({
    padding: '16px',
  })
})

interface MenuItemProps {
  children?: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps): JSX.Element {
  return <StyledMenuItem>{children}</StyledMenuItem>
}
