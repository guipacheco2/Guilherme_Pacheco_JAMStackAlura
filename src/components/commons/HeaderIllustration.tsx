import React from 'react'
import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme'

interface StyledHeaderIllustrationProps {
  position: 'left' | 'right'
}

const StyledHeaderIllustration = styled.figure<StyledHeaderIllustrationProps>(
  ({ position, theme }) => {
    return css`
      position: absolute;
      z-index: 0;
      opacity: 0.5;
      color: ${theme.colors.primary.dark};

      ${breakpointsMedia({
        lg: css`
          width: 300px;
        `,
        md: css`
          width: 200px;
        `,
        xs: css`
          width: 150px;
        `,
      })}

      ${position === 'left'
        ? css`
            top: 24px;
            left: 24px;
          `
        : ''}

      ${position === 'right'
        ? css`
            right: 24px;
            bottom: 24px;
          `
        : ''}
    `
  },
)

interface HeaderIllustrationProps extends StyledHeaderIllustrationProps {
  children?: React.ReactNode
}

export function HeaderIllustration({
  children,
  position,
}: HeaderIllustrationProps): JSX.Element {
  return (
    <StyledHeaderIllustration position={position}>
      {children}
    </StyledHeaderIllustration>
  )
}
