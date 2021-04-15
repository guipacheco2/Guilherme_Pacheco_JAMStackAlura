import { GetStaticProps } from 'next'
import {
  getHomeScreenContent,
  HomeScreen,
  HomeScreenProps,
} from '../components/screens'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(HomeScreen)

export const getStaticProps: GetStaticProps<HomeScreenProps> = async ({
  preview,
}) => {
  const projects = await getHomeScreenContent({ preview })

  return {
    props: {
      headerCover: true,
      projects,
    },
  }
}
