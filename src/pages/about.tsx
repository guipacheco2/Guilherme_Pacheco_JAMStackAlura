import { GetStaticProps } from 'next'
import React from 'react'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(function About(): JSX.Element {
  return <div>Sobre mim</div>
})

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Sobre mim',
      },
    },
  }
}
