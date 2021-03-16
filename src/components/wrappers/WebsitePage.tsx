import React, { createContext, useContext } from 'react'
import { useColorSchema, useToggleColorSchema } from '../../theme'
import {
  Button,
  Footer,
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

    const { seoProps, headerCover, ...otherProps } = props

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
          )}

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
                <Button onColor="primary" onClick={handleOpenContactModal}>
                  Contato
                </Button>
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
