import React from 'react'
import styled, { css } from 'styled-components'

const StyledPage = styled.div(() => {
  return css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  })
})

interface PageProps {
  children?: React.ReactNode
}

export function Page({ children }: PageProps): JSX.Element {
  return <StyledPage>{children}</StyledPage>
}
