import React from 'react'
import styled, { css } from 'styled-components'

const StyledSocialMediaIcon = styled.div(({ theme }) => {
  return css`
    color: ${theme.colors.primary.contrastText};
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  `
})

interface SocialMediaIconProps {
  children: React.ReactNode
}

export function SocialMediaIcon({
  children,
}: SocialMediaIconProps): JSX.Element {
  return <StyledSocialMediaIcon>{children}</StyledSocialMediaIcon>
}
