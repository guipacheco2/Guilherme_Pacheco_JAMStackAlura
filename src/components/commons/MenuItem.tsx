import React from 'react'
import styled, { css } from 'styled-components'

const StyledMenuItem = styled.div(() => {
  return css({
    padding: '12px',
  })
})

interface MenuItemProps {
  children?: React.ReactNode
}

export function MenuItem({ children }: MenuItemProps): JSX.Element {
  return <StyledMenuItem>{children}</StyledMenuItem>
}
