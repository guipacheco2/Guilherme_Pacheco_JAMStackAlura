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

const projects = [
  { id: 1, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 2, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 3, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 4, title: 'Projeto Report', description: 'Lorem', featured: true },
]

export function HomeScreen(): JSX.Element {
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
          return (
            <Card featured={project.featured} key={project.id}>
              <CardImage />

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
