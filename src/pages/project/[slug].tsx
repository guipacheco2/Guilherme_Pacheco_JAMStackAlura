import { GetStaticPaths, GetStaticProps } from 'next'
import {
  ProjectDetailScreen,
  ProjectDetailScreenProps,
} from '../../components/screens'
import { withWebsitePage } from '../../components/wrappers'
import db from '../../resources/db.json'
import { Projects } from '../../resources/db.types'

export default withWebsitePage(ProjectDetailScreen)

export const getStaticProps: GetStaticProps<ProjectDetailScreenProps> = async ({
  params,
}) => {
  const projects: Projects = db.projects

  const project = projects.find((project) => project.slug === params.slug)

  return {
    props: {
      seoProps: {
        headTitle: 'Project detail',
      },
      project,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects: Projects = db.projects

  const paths = projects.map((project) => {
    return { params: { slug: project.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}
