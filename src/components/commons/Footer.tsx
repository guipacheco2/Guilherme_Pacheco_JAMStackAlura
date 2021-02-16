import React from 'react'
import styled, { css } from 'styled-components'

const StyledFooter = styled.div(({ theme }) => {
  return css({
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary.main,
  })
})

export function Footer({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element {
  return <StyledFooter>{children}</StyledFooter>
}
