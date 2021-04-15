import { gql } from 'graphql-request'
import React from 'react'
import { CMSGraphQLClient } from '../../../infra'
import { Dd, Dl, Dt, SectionTitle, StyledLink } from '../../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../../foundation'
import { ProjectDetailScreenImage } from './components'

interface PageProject {
  id: string
  projectDescription: string
  projectImage: {
    responsiveImage: {
      src: string
    }
  }
  projectLink: string
  projectTitle: string
}

export interface ProjectDetailScreenProps {
  project: PageProject
}

export function ProjectDetailScreen({
  project,
}: ProjectDetailScreenProps): JSX.Element {
  return (
    <GridContainer flex={1}>
      <SectionTitle>
        <Typography
          surfaceColor="background"
          as="h3"
          variant={{ md: 'headline4', xs: 'headline5' }}
          textAlign="center"
        >
          {project.projectTitle}
        </Typography>
      </SectionTitle>

      <GridRow>
        <GridCol
          flexDirection="column"
          size={{ md: 4, xs: 12 }}
          marginTop="16px"
        >
          <ProjectDetailScreenImage
            src={project.projectImage.responsiveImage.src}
          />
        </GridCol>

        <GridCol
          marginTop={{ md: 0, xs: '16px' }}
          size={{ md: 8, xs: 12 }}
          flexDirection="column"
        >
          <GridRow>
            <GridCol marginTop="16px">
              <Typography surfaceColor="background" as="p" variant="bodyText2">
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.projectDescription,
                  }}
                />
              </Typography>
            </GridCol>
          </GridRow>

          <GridRow marginTop="32px">
            <GridCol>
              <Dl>
                <Dt>
                  <Typography variant="bodyText1" surfaceColor="surface">
                    Visite o site
                  </Typography>
                </Dt>
                <Dd>
                  <StyledLink
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography variant="caption" surfaceColor="surface">
                      {project.projectLink}
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

export async function getProjectDetailScreenContent({
  id,
  preview,
}: {
  id: string
  preview: boolean
}): Promise<PageProject> {
  const response: { pageProject: PageProject } = await CMSGraphQLClient({
    preview,
  }).query({
    query: gql`
      query getProject($id: ItemId!) {
        pageProject(filter: { id: { eq: $id } }) {
          id
          projectDescription
          projectLink
          projectTitle
          projectImage {
            responsiveImage(imgixParams: { fm: jpg, h: 300 }) {
              src
            }
          }
        }
      }
    `,
    variables: { id },
  })

  return response.pageProject
}
