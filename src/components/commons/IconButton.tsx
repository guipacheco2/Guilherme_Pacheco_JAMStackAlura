import React from 'react'
import styled, { css } from 'styled-components'
import { ColorKeys } from '../../theme'

interface StyledIconButtonProps {
  onColor: ColorKeys
}

const StyledIconButton = styled.button<StyledIconButtonProps>(
  ({ theme, onColor }) => {
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}

export function IconButton({
  onClick,
  onColor,
  children,
}: IconButtonProps): JSX.Element {
  return (
    <StyledIconButton onColor={onColor} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}
