import React from 'react'
import styled, { css } from 'styled-components'

const StyledPage = styled.div(({ theme }) => {
  return css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: theme.colors.background.main,
  })
})

interface PageProps {
  children?: React.ReactNode
}

export function Page({ children }: PageProps): JSX.Element {
  return <StyledPage>{children}</StyledPage>
}
