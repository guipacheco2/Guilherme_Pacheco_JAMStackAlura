import React from 'react'

const Card = DummyComponent
const CardImage = DummyComponent
const CardList = DummyComponent
const CardText = DummyComponent
const CardTitle = DummyComponent
const Footer = DummyComponent
const Header = DummyComponent
const Link = DummyComponent
const Logo = DummyComponent
const Menu = DummyComponent
const MenuSpacer = DummyComponent
const Page = DummyComponent
const Section = DummyComponent
const SectionTitle = DummyComponent
const SocialMediaIcon = DummyComponent

function DummyComponent({
  children,
}: {
  featured?: boolean
  children?: React.ReactNode
}): JSX.Element {
  return <div>{children}</div>
}

export default function HomePage(): JSX.Element {
  return (
    <Page>
      <Header>
        <Menu>
          <Logo />
          <MenuSpacer />
          <Link>Sobre mim</Link>
          <Link>Contato</Link>
        </Menu>
      </Header>

      <Section>
        <SectionTitle>Meus projetos</SectionTitle>

        <CardList>
          <Card featured={false}>
            <CardImage />
            <CardTitle>Projeto Report</CardTitle>
            <CardText>Lorem</CardText>
          </Card>
        </CardList>
      </Section>

      <Footer>
        <Menu>
          <SocialMediaIcon />
          <SocialMediaIcon />
          <SocialMediaIcon />
        </Menu>
      </Footer>
    </Page>
  )
}
