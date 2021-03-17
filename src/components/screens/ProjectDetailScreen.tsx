import React from 'react'
import { Dd, Dl, Dt, SectionTitle, StyledLink } from '../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'

export interface ProjectDetailScreenProps {
  project: {
    image: string
    featured: boolean
    title: string
    slug: string
    description: string
    link: string
  }
}

export function ProjectDetailScreen({
  project,
}: ProjectDetailScreenProps): JSX.Element {
  return (
    <GridContainer flex={1}>
      <SectionTitle>
        <Typography
          onColor="background"
          as="h3"
          variant={{ xs: 'headline5', md: 'headline4' }}
          textAlign="center"
        >
          {project.title}
        </Typography>
      </SectionTitle>

      <GridRow>
        <GridCol size={{ xs: 12, md: 4 }} marginTop="16px">
          {/* TODO: image fill */}
          <img src={project.image} loading="lazy" />
        </GridCol>

        <GridCol
          marginTop="16px"
          size={{ xs: 12, md: 8 }}
          flexDirection="column"
        >
          <Typography onColor="background" as="p" variant="bodyText2">
            {project.description}
          </Typography>

          {/* TODO: Margin */}

          <Dl>
            <Dt>
              <Typography variant="bodyText1" onColor="surface">
                Visite o site
              </Typography>
            </Dt>
            <Dd>
              <StyledLink href={project.link} target="_blank" rel="noreferrer">
                <Typography variant="caption" onColor="surface">
                  {project.link}
                </Typography>
              </StyledLink>
            </Dd>
          </Dl>
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
