import React from 'react'
import styled, { css } from 'styled-components'
import { ColorKeys } from '../../theme'
import { Typography } from '../foundation'

const StyledIcon = styled.div(({ theme }) => {
  return css`
    width: 24px;
    height: 24px;
    margin: 0 8px;
    color: ${theme.colors.surface.contrastText};
  `
})

const StyledButton = styled.button(() => {
  return css`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 4px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  `
})

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  endIcon?: React.ReactNode
  children?: React.ReactNode
  onColor: ColorKeys
}

export function Button({
  type,
  disabled,
  onClick,
  onColor,
  endIcon,
  children,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      <Typography onColor={onColor} variant="button">
        {children}
      </Typography>

      {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
    </StyledButton>
  )
}
