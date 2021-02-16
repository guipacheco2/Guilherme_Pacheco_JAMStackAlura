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

export function Page({
  children,
}: {
  children?: React.ReactNode
}): JSX.Element {
  return <StyledPage>{children}</StyledPage>
}
