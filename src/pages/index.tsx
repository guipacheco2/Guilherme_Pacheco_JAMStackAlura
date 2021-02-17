import React from 'react'
import {
  Card,
  CardContent,
  CardImage,
  CardList,
  CardText,
  CardTitle,
  Footer,
  GridContainer,
  Header,
  HeaderCover,
  HeaderIllustration,
  Logo,
  Menu,
  MenuItem,
  MenuSpacer,
  Page,
  SectionTitle,
  SocialMediaIcon,
  Typography,
} from '../components'
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../components/icons'
import { BookshelfIllustration } from '../components/illustrations/BookshelfIllustration'
import { ProgrammingIllustration } from '../components/illustrations/ProgrammingIllustration'

const projects = [
  { id: 1, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 2, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 3, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 4, title: 'Projeto Report', description: 'Lorem', featured: true },
]

export default function HomePage(): JSX.Element {
  return (
    <Page>
      <Header>
        <HeaderCover>
          <HeaderIllustration position="left">
            <BookshelfIllustration />
          </HeaderIllustration>
          <HeaderIllustration position="right">
            <ProgrammingIllustration />
          </HeaderIllustration>
          <Typography
            onColor="primary"
            as="h1"
            variant={{ xs: 'headline4', md: 'headline2' }}
            textAlign="center"
          >
            Guilherme Pacheco
          </Typography>
          <Typography
            onColor="primary"
            as="h2"
            variant={{ xs: 'headline5', md: 'headline3' }}
            textAlign="center"
          >
            Portfólio
          </Typography>
        </HeaderCover>

        <Menu size="normal">
          <GridContainer alignItems="center" display="flex">
            <MenuItem>
              <a>
                <Logo />
              </a>
            </MenuItem>
            <MenuSpacer />
            <MenuItem>
              <Typography as="a" onColor="primary" variant="button">
                Sobre mim
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography as="a" onColor="primary" variant="button">
                Contato
              </Typography>
            </MenuItem>
          </GridContainer>
        </Menu>
      </Header>

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
      </GridContainer>

      <Footer>
        <Menu size="small">
          <MenuItem>
            <SocialMediaIcon>
              <GithubIcon />
            </SocialMediaIcon>
          </MenuItem>
          <MenuItem>
            <SocialMediaIcon>
              <TwitterIcon />
            </SocialMediaIcon>
          </MenuItem>
          <MenuItem>
            <SocialMediaIcon>
              <LinkedInIcon />
            </SocialMediaIcon>
          </MenuItem>
        </Menu>
      </Footer>
    </Page>
  )
}
