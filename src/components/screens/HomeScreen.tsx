import React from 'react'
import { CMSGraphQLClient, gql } from '../../infra'
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardList,
  CardText,
  CardTitle,
  Link,
  SectionTitle,
} from '../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'
import { AddCircleOutlineIcon } from '../icons'
import { useWebsitePageContext } from '../wrappers'

interface PageProject {
  id: string
  projectFeatured: boolean
  projectFeaturedIntro: string
  projectImage: {
    responsiveImage: {
      src: string
    }
  }
  projectTitle: string
}
export interface HomeScreenProps {
  projects: PageProject[]
}

export function HomeScreen({ projects }: HomeScreenProps): JSX.Element {
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
          Projetos
        </Typography>
      </SectionTitle>

      <CardList>
        {projects.map((project) => {
          return (
            <Card
              as={Link}
              featured={project.projectFeatured}
              key={project.projectTitle}
              href={`/project/${project.id}`}
            >
              <CardImage src={project.projectImage.responsiveImage.src} />

              <CardContent>
                <CardTitle>
                  <Typography
                    surfaceColor="surface"
                    as="h6"
                    variant="headline6"
                    textAlign={project.projectFeatured ? 'initial' : 'center'}
                  >
                    {project.projectTitle}
                  </Typography>
                </CardTitle>

                {project.projectFeatured && (
                  <CardText>
                    <Typography
                      surfaceColor="surface"
                      as="p"
                      variant="bodyText1"
                    >
                      {project.projectFeaturedIntro}
                    </Typography>
                  </CardText>
                )}
              </CardContent>
            </Card>
          )
        })}
      </CardList>

      <GridRow>
        <GridCol
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Button
            surfaceColor="surface"
            onClick={handleOpenContactModal}
            endIcon={<AddCircleOutlineIcon />}
          >
            Entre em contato
          </Button>
        </GridCol>
      </GridRow>
    </GridContainer>
  )
}

export async function getHomeScreenContent({
  preview,
}: {
  preview: boolean
}): Promise<PageProject[]> {
  const response: { allPageProjects: PageProject[] } = await CMSGraphQLClient({
    preview,
  }).query({
    query: gql`
      query {
        allPageProjects {
          id
          projectTitle
          projectFeatured
          projectFeaturedIntro
          projectImage {
            responsiveImage(imgixParams: { fm: jpg, h: 300 }) {
              src
            }
          }
        }
      }
    `,
  })

  return response.allPageProjects
}
