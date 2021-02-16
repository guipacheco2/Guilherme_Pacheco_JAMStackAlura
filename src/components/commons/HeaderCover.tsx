import React from 'react'
import styled, { css } from 'styled-components'

const StyledHeaderCover = styled.div(({ theme }) => {
  return css({
    height: '472px',
    backgroundColor: theme.colors.primary.main,
  })
})

export function HeaderCover({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element {
  return <StyledHeaderCover>{children}</StyledHeaderCover>
}
