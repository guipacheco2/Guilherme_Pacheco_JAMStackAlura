import React from 'react'
import { Dd, Dl, Dt, SectionTitle, StyledLink } from '../../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../../foundation'
import { ProjectDetailScreenImage } from './components'

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
        <GridCol
          flexDirection="column"
          size={{ xs: 12, md: 4 }}
          marginTop="16px"
        >
          <ProjectDetailScreenImage src={project.image} />
        </GridCol>

        <GridCol
          marginTop={{ xs: '16px', md: 0 }}
          size={{ xs: 12, md: 8 }}
          flexDirection="column"
        >
          <GridRow>
            <GridCol marginTop="16px">
              <Typography onColor="background" as="p" variant="bodyText2">
                {Array.from({ length: 200 })
                  .map((_) => project.description)
                  .join(' ')}
              </Typography>
            </GridCol>
          </GridRow>

          <GridRow marginTop="32px">
            <GridCol>
              <Dl>
                <Dt>
                  <Typography variant="bodyText1" onColor="surface">
                    Visite o site
                  </Typography>
                </Dt>
                <Dd>
                  <StyledLink
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption" onColor="surface">
                      {project.link}
                    </Typography>
                  </StyledLink>
                </Dd>
              </Dl>
            </GridCol>
          </GridRow>
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}
