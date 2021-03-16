import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { withWebsitePage } from '../../components/wrappers'

export default withWebsitePage(function ProjectDetail(): JSX.Element {
  return <div>Project Detail</div>
})

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Project detail',
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
