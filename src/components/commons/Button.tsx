import React from 'react'
import styled, { css } from 'styled-components'
import { ColorKeys } from '../../theme'
import { Typography } from '../foundation'

const StyledIcon = styled.div(() => {
  return css`
    width: 24px;
    height: 24px;
    margin: 0 8px;
  `
})

const StyledButton = styled.button(() => {
  return css`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
  `
})

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  endIcon?: React.ReactNode
  children?: React.ReactNode
  onColor: ColorKeys
}

export function Button({
  onClick,
  onColor,
  endIcon,
  children,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton onClick={onClick}>
      <Typography onColor={onColor} variant="button">
        {children}
      </Typography>

      <StyledIcon>{endIcon}</StyledIcon>
    </StyledButton>
  )
}
