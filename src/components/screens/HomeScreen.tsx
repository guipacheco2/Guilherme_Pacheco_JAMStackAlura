import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardImage,
  CardList,
  CardText,
  CardTitle,
  SectionTitle,
} from '../commons'
import { GridCol, GridContainer, GridRow, Typography } from '../foundation'
import { AddCircleOutlineIcon } from '../icons'
import { useWebsitePageContext } from '../wrappers'

export interface HomeScreenProps {
  projects: {
    image: string
    featured: boolean
    title: string
    description: string
    link: string
  }[]
}

export function HomeScreen({ projects }: HomeScreenProps): JSX.Element {
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
          Projetos
        </Typography>
      </SectionTitle>

      <CardList>
        {projects.map((project) => {
          // TODO: add link to project/project.slug
          return (
            <Card featured={project.featured} key={project.title}>
              <CardImage src={project.image} />

              <CardContent>
                <CardTitle>
                  <Typography
                    onColor="surface"
                    as="h6"
                    variant="headline6"
                    textAlign={project.featured ? 'initial' : 'center'}
                  >
                    {project.title}
                  </Typography>
                </CardTitle>

                {project.featured && (
                  <CardText>
                    <Typography onColor="surface" as="p" variant="bodyText1">
                      {project.description}
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
            onColor="surface"
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
