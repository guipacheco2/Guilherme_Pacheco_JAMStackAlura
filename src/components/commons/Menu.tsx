import React from 'react'
import styled, { css } from 'styled-components'

interface StyledMenuProps {
  size: 'normal' | 'small'
}

const StyledMenu = styled.div<StyledMenuProps>(({ size, theme }) => {
  return css({
    height: size === 'normal' ? '64px' : '48px',
    backgroundColor: theme.colors.primary.dark,
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
  })
})

interface MenuProps extends StyledMenuProps {
  children?: React.ReactNode
}

export function Menu({ size, children }: MenuProps): JSX.Element {
  return <StyledMenu size={size}>{children}</StyledMenu>
}
