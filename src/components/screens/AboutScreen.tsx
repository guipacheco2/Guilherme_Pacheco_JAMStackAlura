import React from 'react'
import { CMSGraphQLClient, gql } from '../../infra'
import { Dd, Dl, Dt, IconButton, SectionTitle, StyledLink } from '../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'
import { AddCircleOutlineIcon } from '../icons'
import { useWebsitePageContext } from '../wrappers'

export interface AboutScreenProps {
  about: {
    aboutPart1: string
    aboutPart2: string
  }
  repositories: {
    name: string
    url: string
  }[]
}

export function AboutScreen({
  about,
  repositories,
}: AboutScreenProps): JSX.Element {
  const { handleOpenContactModal } = useWebsitePageContext()

  return (
    <GridContainer flex={1}>
      <SectionTitle>
        <Typography
          surfaceColor="background"
          as="h3"
          variant={{ md: 'headline4', xs: 'headline5' }}
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
            style={{ borderRadius: '100%', maxWidth: '200px' }}
          />
        </GridCol>
      </GridRow>

      <GridRow marginTop="16px">
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <IconButton surfaceColor="surface" onClick={handleOpenContactModal}>
            <AddCircleOutlineIcon />
          </IconButton>
        </GridCol>
      </GridRow>

      <GridRow>
        <GridCol
          offset={{ lg: 4, md: 3, xs: 0 }}
          size={{ lg: 2, md: 3, xs: 12 }}
          marginTop="16px"
        >
          <Typography surfaceColor="background" as="p" variant="bodyText2">
            {about.aboutPart1}
          </Typography>
        </GridCol>
        <GridCol marginTop="16px" size={{ lg: 2, md: 3, xs: 12 }}>
          <Typography surfaceColor="background" as="p" variant="bodyText2">
            {about.aboutPart2}
          </Typography>
        </GridCol>
      </GridRow>

      <SectionTitle>
        <Typography
          surfaceColor="background"
          as="h3"
          variant={{ md: 'headline4', xs: 'headline5' }}
          textAlign="center"
        >
          Meus repositórios
        </Typography>
      </SectionTitle>

      <GridRow>
        <GridCol
          flexDirection="column"
          offset={{ lg: 4, md: 3, xs: 0 }}
          size={{ lg: 4, md: 6, xs: 12 }}
        >
          {repositories.map((repository) => (
            <Dl key={repository.url}>
              <Dt>
                <Typography variant="bodyText1" surfaceColor="surface">
                  {repository.name}
                </Typography>
              </Dt>
              <Dd>
                <StyledLink
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="caption" surfaceColor="surface">
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

export async function getAboutScreenContent({
  preview,
}: {
  preview: boolean
}): Promise<{
  aboutPart1: string
  aboutPart2: string
}> {
  const response: {
    portfolioPageAbout: {
      aboutPart1: string
      aboutPart2: string
    }
  } = await CMSGraphQLClient({
    preview,
  }).query({
    query: gql`
      query {
        portfolioPageAbout {
          aboutPart1
          aboutPart2
        }
      }
    `,
  })

  return response.portfolioPageAbout
}
