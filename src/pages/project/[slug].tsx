import { gql } from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  getProjectDetailScreenContent,
  ProjectDetailScreen,
  ProjectDetailScreenProps,
} from '../../components/screens'
import { withWebsitePage } from '../../components/wrappers'
import { CMSGraphQLClient } from '../../infra'

export default withWebsitePage(ProjectDetailScreen)

export const getStaticProps: GetStaticProps<ProjectDetailScreenProps> = async ({
  params,
  preview,
}) => {
  const project = await getProjectDetailScreenContent({
    id: params.slug as string,
    preview,
  })

  return {
    props: {
      project,
      seoProps: {
        headTitle: 'Project detail',
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response: {
    allPageProjects: { id: string }[]
  } = await CMSGraphQLClient({
    preview: false,
  }).query({
    query: gql`
      query {
        allPageProjects {
          id
        }
      }
    `,
  })

  const paths = response.allPageProjects.map((project) => {
    return { params: { slug: project.id } }
  })

  return {
    fallback: false,
    paths,
  }
}
