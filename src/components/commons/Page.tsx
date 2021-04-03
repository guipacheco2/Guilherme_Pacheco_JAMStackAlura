import React from 'react'
import styled, { css } from 'styled-components'

const StyledPage = styled.div(({ theme }) => {
  return css({
    backgroundColor: theme.colors.background.main,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  })
})

interface PageProps {
  children?: React.ReactNode
}

export function Page({ children }: PageProps): JSX.Element {
  return <StyledPage>{children}</StyledPage>
}
