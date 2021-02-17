import React from 'react'
import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme'

interface StyledHeaderIllustrationProps {
  position: 'left' | 'right'
}

const StyledHeaderIllustration = styled.div<StyledHeaderIllustrationProps>(
  ({ theme, position }) => {
    return css`
      position: absolute;
      z-index: 0;
      opacity: 0.5;
      color: ${theme.colors.primary.dark};

      ${breakpointsMedia({
        xs: css`
          width: 150px;
        `,
        md: css`
          width: 200px;
        `,
        lg: css`
          width: 300px;
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
  position,
  children,
}: HeaderIllustrationProps): JSX.Element {
  return (
    <StyledHeaderIllustration position={position}>
      {children}
    </StyledHeaderIllustration>
  )
}
