import React from 'react'
import { IconButton, SectionTitle } from '../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'
import { AddCircleOutlineIcon } from '../icons'
import { useWebsitePageContext } from '../wrappers'

export interface AboutScreenProps {
  repositories: {
    name: string
    url: string
  }[]
}

export function AboutScreen({ repositories }: AboutScreenProps): JSX.Element {
  const { handleOpenContactModal } = useWebsitePageContext()

  return (
    <GridContainer flex={1}>
      <SectionTitle>
        <Typography
          onColor="background"
          as="h3"
          variant={{ xs: 'headline5', md: 'headline4' }}
          textAlign="center"
        >
          Sobre mim
        </Typography>
      </SectionTitle>

      <GridRow>
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <img
            src="https://avatars.githubusercontent.com/u/583094"
            style={{ maxWidth: '200px', borderRadius: '100%' }}
          />
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <IconButton onColor="surface" onClick={handleOpenContactModal}>
            <AddCircleOutlineIcon />
          </IconButton>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol
          alignItems="center"
          justifyContent="center"
          size={{ xs: 12, sm: 6 }}
          flexDirection="column"
        >
          <Typography onColor="background" as="p" variant="bodyText2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
            imperdiet urna. Nunc lacinia justo sed augue rutrum cursus. Sed
            venenatis sem in felis efficitur imperdiet. Etiam dignissim neque
            vel facilisis facilisis. Morbi vel ligula eros. Nulla dictum porta
            ante, in luctus nulla dapibus quis. Mauris ipsum arcu, dignissim a
            felis non, eleifend congue ante.
          </Typography>
        </GridCol>
        <GridCol
          alignItems="center"
          justifyContent="center"
          size={{ xs: 12, sm: 6 }}
          flexDirection="column"
        >
          <Typography onColor="background" as="p" variant="bodyText2">
            Fusce vitae ante ut sapien posuere elementum non sit amet purus.
            Integer vulputate pharetra tincidunt. Maecenas quis rutrum urna. Sed
            egestas tortor risus, vitae pretium diam varius eu. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Morbi eu arcu augue.
          </Typography>
        </GridCol>
      </GridRow>

      <SectionTitle>
        <Typography
          onColor="background"
          as="h3"
          variant={{ xs: 'headline5', md: 'headline4' }}
          textAlign="center"
        >
          Meus repositórios
        </Typography>
      </SectionTitle>

      <GridRow>
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          {repositories.map((repository) => (
            <dl key={repository.url}>
              <dt>{repository.name}</dt>
              <dd>
                <a href={repository.url} target="_blank" rel="noreferrer">
                  {repository.url}
                </a>
              </dd>
            </dl>
          ))}
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
