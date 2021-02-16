import React from 'react'
import styled, { css } from 'styled-components'

const StyledHeaderCover = styled.div(({ theme }) => {
  return css({
    height: '472px',
    backgroundColor: theme.colors.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  })
})

interface HeaderCoverProps {
  children?: React.ReactNode
}

export function HeaderCover({ children }: HeaderCoverProps): JSX.Element {
  return <StyledHeaderCover>{children}</StyledHeaderCover>
}
