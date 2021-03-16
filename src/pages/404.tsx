import { GetStaticProps } from 'next'
import React from 'react'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(function Error404(): JSX.Element {
  return <div>Error 404</div>
})

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Não encontrado',
      },
    },
  }
}
