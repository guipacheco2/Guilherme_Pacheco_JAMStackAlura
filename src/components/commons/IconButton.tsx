import React from 'react'
import styled, { css } from 'styled-components'
import { ColorKeys } from '../../theme'

interface StyledIconButtonProps {
  surfaceColor: ColorKeys
}

const StyledIconButton = styled.button<StyledIconButtonProps>(
  ({ surfaceColor, theme }) => {
    return css`
      width: 24px;
      height: 24px;
      color: ${theme.colors[surfaceColor].contrastText};
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
    `
  },
)

interface IconButtonProps extends StyledIconButtonProps {
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export function IconButton({
  children,
  onClick,
  surfaceColor,
}: IconButtonProps): JSX.Element {
  return (
    <StyledIconButton surfaceColor={surfaceColor} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}
