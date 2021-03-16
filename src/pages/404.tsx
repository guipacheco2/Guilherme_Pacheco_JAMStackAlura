import { GetStaticProps } from 'next'
import React from 'react'

export default function Error404(): JSX.Element {
  return <div>Error 404</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
