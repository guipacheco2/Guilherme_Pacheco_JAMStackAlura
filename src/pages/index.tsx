import { GetStaticProps } from 'next'
import { HomeScreen } from '../components/screens'
import { WebsitePageProps, withWebsitePage } from '../components/wrappers'

export default withWebsitePage(HomeScreen)

export const getStaticProps: GetStaticProps<WebsitePageProps> = async () => {
  return {
    props: {
      headerCover: true,
    },
  }
}
