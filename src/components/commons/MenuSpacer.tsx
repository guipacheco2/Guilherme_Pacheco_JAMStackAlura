import React from 'react'
import styled, { css } from 'styled-components'

const StyledMenuSpacer = styled.div(() => {
  return css({
    flexGrow: 1,
  })
})

export function MenuSpacer(): JSX.Element {
  return <StyledMenuSpacer />
}
