import { GetStaticProps } from 'next'
import React from 'react'

export default function About(): JSX.Element {
  return <div>Sobre mim</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}
