import React from 'react'
import styled, { css } from 'styled-components'
import { breakpointsMedia } from '../../theme'

interface StyledCardProps {
  featured?: boolean
}

const StyledCard = styled.section<StyledCardProps>(({ featured }) => {
  return css`
    flex: 1;
    padding: 12px;
    min-width: 100%;
    max-width: 100%;
    ${featured
      ? css`
          order: -1;
          ${breakpointsMedia({
            md: css`
              order: initial;
            `,
          })}
        `
      : breakpointsMedia({
          md: css`
            min-width: 33.3%;
          `,
        })}
  `
})

interface StyledCardInnerProps {
  featured?: boolean
}

const StyledCardInner = styled.div<StyledCardInnerProps>(
  ({ featured, theme }) => {
    return css`
      border: 1px solid ${theme.colors.primary.light};
      overflow: hidden;
      background-color: ${theme.schema === 'light'
        ? theme.colors.surface.main
        : theme.colors.primary.dark};
      ${featured
        ? breakpointsMedia({
            md: css`
              display: flex;
            `,
          })
        : css``}
    `
  },
)

interface CardProps extends StyledCardProps {
  children?: React.ReactNode
}

export function Card({ featured, children }: CardProps): JSX.Element {
  return (
    <StyledCard featured={featured}>
      <StyledCardInner featured={featured}>{children}</StyledCardInner>
    </StyledCard>
  )
}
