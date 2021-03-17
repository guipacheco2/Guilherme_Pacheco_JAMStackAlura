import { GetStaticProps } from 'next'
import { Error404Screen } from '../components/screens'
import { withWebsitePage } from '../components/wrappers'

export default withWebsitePage(Error404Screen)

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      seoProps: {
        headTitle: 'Não encontrado',
      },
    },
  }
}
