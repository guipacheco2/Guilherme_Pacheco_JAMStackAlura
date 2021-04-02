import React, { createContext, useContext } from 'react'
import { useColorSchema, useToggleColorSchema } from '../../theme'
import {
  Button,
  Footer,
  Header,
  HeaderCover,
  HeaderIllustration,
  IconButton,
  Link,
  Logo,
  Menu,
  MenuItem,
  MenuSpacer,
  Modal,
  Page,
  SEO,
  SEOProps,
  SocialMediaIcon,
  useModal,
} from '../commons'
import { GridContainer, Typography } from '../foundation'
import {
  BrightnessDarkIcon,
  BrightnessLightIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '../icons'
import { BookshelfIllustration } from '../illustrations/BookshelfIllustration'
import { ProgrammingIllustration } from '../illustrations/ProgrammingIllustration'
import { ContactForm } from '../patterns'

export interface WebsitePageProps {
  headerCover?: boolean
  seoProps?: SEOProps
}

interface WebsitePageContextProps {
  handleOpenContactModal: () => void
}

const WebsitePageContext = createContext({} as WebsitePageContextProps)

export function useWebsitePageContext(): WebsitePageContextProps {
  return useContext(WebsitePageContext)
}

export function withWebsitePage<Props>(
  PageComponent: React.ComponentType<Props>,
) {
  return function WebsitePage(props: WebsitePageProps): JSX.Element {
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

    const websitePageContextValue: WebsitePageContextProps = {
      handleOpenContactModal,
    }

    const { headerCover, seoProps, ...otherProps } = props

    return (
      <Page>
        <SEO {...seoProps} />
        <Header>
          {headerCover && (
            <HeaderCover>
              <HeaderIllustration position="left">
                <BookshelfIllustration />
              </HeaderIllustration>
              <HeaderIllustration position="right">
                <ProgrammingIllustration />
              </HeaderIllustration>
              <Typography
                surfaceColor="primary"
                as="h1"
                variant={{ md: 'headline2', xs: 'headline4' }}
                textAlign="center"
              >
                Guilherme Pacheco
              </Typography>
              <Typography
                surfaceColor="primary"
                as="h2"
                variant={{ md: 'headline3', xs: 'headline5' }}
                textAlign="center"
              >
                Portfólio
              </Typography>
            </HeaderCover>
          )}

          <Menu size="normal">
            <GridContainer alignItems="center" display="flex">
              <MenuItem>
                <Link href="/">
                  <Logo />
                </Link>
              </MenuItem>
              <MenuSpacer />
              <MenuItem>
                <Typography
                  href="/about"
                  surfaceColor="primary"
                  variant="button"
                >
                  Sobre mim
                </Typography>
              </MenuItem>
              <MenuItem>
                <Button surfaceColor="primary" onClick={handleOpenContactModal}>
                  Contato
                </Button>
              </MenuItem>
              <MenuItem>
                <IconButton
                  surfaceColor="primary"
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

        <WebsitePageContext.Provider value={websitePageContextValue}>
          <PageComponent {...(otherProps as Props)} />
        </WebsitePageContext.Provider>

        <Modal onClose={handleCloseContactModal} isOpen={isContactModalOpen}>
          <ContactForm onExit={handleCloseContactModal} />
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
}
