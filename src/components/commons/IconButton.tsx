import React from 'react'
import styled, { css } from 'styled-components'

const StyledIconButton = styled.button(({ theme }) => {
  return css`
    width: 24px;
    height: 24px;
    color: ${theme.colors.primary.contrastText};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  `
})

interface IconButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}

export function IconButton({
  onClick,
  children,
}: IconButtonProps): JSX.Element {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>
}
