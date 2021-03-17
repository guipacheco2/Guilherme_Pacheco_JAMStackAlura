import React from 'react'
import { Dd, Dl, Dt, IconButton, SectionTitle, StyledLink } from '../commons'
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
            loading="lazy"
            style={{ maxWidth: '200px', borderRadius: '100%' }}
          />
        </GridCol>
      </GridRow>

      <GridRow marginTop="16px">
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
          offset={{ xs: 0, md: 3, lg: 4 }}
          size={{ xs: 12, md: 3, lg: 2 }}
          marginTop="16px"
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
        <GridCol marginTop="16px" size={{ xs: 12, md: 3, lg: 2 }}>
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
          flexDirection="column"
          offset={{ xs: 0, md: 3, lg: 4 }}
          size={{ xs: 12, md: 6, lg: 4 }}
        >
          {repositories.map((repository) => (
            <Dl key={repository.url}>
              <Dt>
                <Typography variant="bodyText1" onColor="surface">
                  {repository.name}
                </Typography>
              </Dt>
              <Dd>
                <StyledLink
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="caption" onColor="surface">
                    {repository.url}
                  </Typography>
                </StyledLink>
              </Dd>
            </Dl>
          ))}
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
