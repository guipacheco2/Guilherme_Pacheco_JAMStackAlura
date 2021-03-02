import React from 'react'
import {
  Button,
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
  IconButton,
  Logo,
  Menu,
  MenuItem,
  MenuSpacer,
  Modal,
  Page,
  SectionTitle,
  SocialMediaIcon,
  Typography,
  useModal,
} from '../components'
import { TextField } from '../components/forms'
import {
  AddCircleOutlineIcon,
  BrightnessDarkIcon,
  BrightnessLightIcon,
  GithubIcon,
  LinkedInIcon,
  SendIcon,
  TwitterIcon,
} from '../components/icons'
import { BookshelfIllustration } from '../components/illustrations/BookshelfIllustration'
import { ProgrammingIllustration } from '../components/illustrations/ProgrammingIllustration'
import { useColorSchema, useToggleColorSchema } from '../theme'

const projects = [
  { id: 1, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 2, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 3, title: 'Projeto Report', description: 'Lorem', featured: false },
  { id: 4, title: 'Projeto Report', description: 'Lorem', featured: true },
]

export default function HomePage(): JSX.Element {
  const toggleColorSchema = useToggleColorSchema()
  const colorSchema = useColorSchema()

  function handleClickBrightnessButton() {
    toggleColorSchema()
  }

  const [
    isContactModalOpen,
    handleOpenContactModal,
    handleCloseContactModal,
  ] = useModal()

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
            <MenuItem>
              <IconButton
                onColor="primary"
                onClick={handleClickBrightnessButton}
              >
                {colorSchema === 'light' ? (
                  <BrightnessDarkIcon />
                ) : (
                  <BrightnessLightIcon />
                )}
              </IconButton>
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

        <Typography variant="headline5" onColor="surface" textAlign="center">
          Entre em contato
        </Typography>

        <IconButton onColor="surface" onClick={handleOpenContactModal}>
          <AddCircleOutlineIcon />
        </IconButton>
      </GridContainer>

      <Modal onClose={handleCloseContactModal} isOpen={isContactModalOpen}>
        <Typography variant="headline5" onColor="surface" textAlign="center">
          Envie sua mensagem
        </Typography>

        <TextField
          id="contactFormNameInput"
          label="Seu nome"
          placeholder="Seu nome"
          name="name"
          value={'userInfo.name'}
          onChange={() => false}
        />

        <TextField
          id="contactFormEmailInput"
          label="Seu email"
          placeholder="Seu email"
          name="email"
          value={'userInfo.name'}
          onChange={() => false}
        />

        <TextField
          id="contactFormMessageInput"
          label="Sua mensagem"
          placeholder="Sua mensagem"
          name="message"
          multiline
          value={'userInfo.name'}
          onChange={() => false}
        />

        <Button onColor="surface" onClick={console.log} endIcon={<SendIcon />}>
          Enviar
        </Button>
      </Modal>

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
