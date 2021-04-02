import React from 'react'
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

export interface HomeScreenProps {
  projects: {
    description: string
    featured: boolean
    image: string
    link: string
    slug: string
    title: string
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
              featured={project.featured}
              key={project.title}
              href={`/project/${project.slug}`}
            >
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
