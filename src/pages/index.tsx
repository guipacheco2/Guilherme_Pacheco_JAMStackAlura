import React from 'react'
import {
  Card,
  CardImage,
  CardList,
  CardText,
  CardTitle,
  Footer,
  Header,
  HeaderCover,
  Logo,
  Menu,
  MenuItem,
  MenuSpacer,
  Page,
  Section,
  SectionTitle,
  SocialMediaIcon,
  Typography,
} from '../components'

export default function HomePage(): JSX.Element {
  return (
    <Page>
      <Header>
        <HeaderCover>
          <Typography
            onColor="primary"
            as="h1"
            variant="headline1"
            textAlign="center"
          >
            Guilherme Pacheco
          </Typography>
          <Typography
            onColor="primary"
            as="h2"
            variant="headline2"
            textAlign="center"
          >
            Portfólio
          </Typography>
        </HeaderCover>

        <Menu size="normal">
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
        </Menu>
      </Header>

      <Section>
        <SectionTitle>
          <Typography onColor="background" as="h3" variant="headline3">
            Meus projetos
          </Typography>
        </SectionTitle>

        <CardList>
          <Card featured={false}>
            <CardImage />
            <CardTitle>
              <Typography onColor="surface" as="h6" variant="headline6">
                Projeto Report
              </Typography>
            </CardTitle>
            <CardText>
              <Typography onColor="surface" as="p" variant="bodyText1">
                Lorem
              </Typography>
            </CardText>
          </Card>
        </CardList>
      </Section>

      <Footer>
        <Menu size="small">
          <MenuItem>
            <SocialMediaIcon />
          </MenuItem>
          <MenuItem>
            <SocialMediaIcon />
          </MenuItem>
          <MenuItem>
            <SocialMediaIcon />
          </MenuItem>
        </Menu>
      </Footer>
    </Page>
  )
}
