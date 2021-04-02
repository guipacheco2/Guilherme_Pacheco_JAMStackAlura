import React from 'react'
import styled, { css } from 'styled-components'

const StyledHeaderCover = styled.div(({ theme }) => {
  return css({
    backgroundColor: theme.colors.primary.main,
    display: 'flex',
    flexDirection: 'column',
    height: '472px',
    justifyContent: 'center',
    position: 'relative',
  })
})

interface HeaderCoverProps {
  children?: React.ReactNode
}

export function HeaderCover({ children }: HeaderCoverProps): JSX.Element {
  return <StyledHeaderCover>{children}</StyledHeaderCover>
}
