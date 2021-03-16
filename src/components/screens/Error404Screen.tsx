import React from 'react'
import { NotFoundAnimation } from '../animations'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'

export function Error404Screen(): JSX.Element {
  return (
    <GridContainer flex={1}>
      <GridRow fullHeight>
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography onColor="surface" as="h1" variant="headline5">
            Página não encontrada
          </Typography>

          <NotFoundAnimation />
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
