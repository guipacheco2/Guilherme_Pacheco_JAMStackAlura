import { GetStaticProps } from 'next'
import {
  AboutScreen,
  AboutScreenProps,
  getAboutScreenContent,
} from '../components/screens'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(AboutScreen)

interface GithubRepository {
  fork: boolean
  html_url: string
  name: string
  updated_at: string
}

export const getStaticProps: GetStaticProps<AboutScreenProps> = async ({
  preview,
}) => {
  const about = await getAboutScreenContent({ preview })

  const rawRepositories: GithubRepository[] = await fetch(
    'https://api.github.com/users/guipacheco2/repos',
  ).then((res) => res.json())

  const repositories = rawRepositories
    .filter((repository) => !repository.fork)
    .sort((a, b) => {
      if (new Date(a.updated_at) < new Date(b.updated_at)) {
        return 1
      }

      if (new Date(a.updated_at) > new Date(b.updated_at)) {
        return -1
      }

      return 0
    })
    .map((repository) => {
      return {
        name: repository.name,
        url: repository.html_url,
      }
    })

  return {
    props: {
      about,
      repositories,
      seoProps: {
        headTitle: 'Sobre mim',
      },
    },
  }
}
