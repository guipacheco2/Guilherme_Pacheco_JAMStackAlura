import { GetStaticProps } from 'next'
import { HomeScreen, HomeScreenProps } from '../components/screens'
import { withWebsitePage } from '../components/wrappers'
import db from '../resources/db.json'
import { Projects } from '../resources/db.types'

export default withWebsitePage(HomeScreen)

export const getStaticProps: GetStaticProps<HomeScreenProps> = async () => {
  const projects: Projects = db.projects

  return {
    props: {
      headerCover: true,
      projects,
    },
  }
}
