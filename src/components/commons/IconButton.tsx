import React from 'react'
import styled, { css } from 'styled-components'
import { ColorKeys } from '../../theme'

interface StyledIconButtonProps {
  onColor: ColorKeys
}

const StyledIconButton = styled.button<StyledIconButtonProps>(
  ({ onColor, theme }) => {
    return css`
      width: 24px;
      height: 24px;
      color: ${theme.colors[onColor].contrastText};
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
  onColor,
}: IconButtonProps): JSX.Element {
  return (
    <StyledIconButton onColor={onColor} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}
