import React from 'react'
import styled, { css } from 'styled-components'

interface StyledMenuProps {
  size: 'normal' | 'small'
}

const StyledMenu = styled.nav<StyledMenuProps>(({ size, theme }) => {
  return css({
    alignItems: 'center',
    backgroundColor: theme.colors.primary.dark,
    display: 'flex',
    height: size === 'normal' ? '64px' : '48px',
  })
})

interface MenuProps extends StyledMenuProps {
  children?: React.ReactNode
}

export function Menu({ children, size }: MenuProps): JSX.Element {
  return <StyledMenu size={size}>{children}</StyledMenu>
}
