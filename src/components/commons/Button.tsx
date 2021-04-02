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
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: 0.2;
    }
  `
})

interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  endIcon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  surfaceColor: ColorKeys
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  disabled,
  endIcon,
  onClick,
  surfaceColor,
  type,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      <Typography surfaceColor={surfaceColor} variant="button">
        {children}
      </Typography>

      {endIcon && <StyledIcon>{endIcon}</StyledIcon>}
    </StyledButton>
  )
}
