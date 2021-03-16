import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

export default function ProjectDetail(): JSX.Element {
  return <div>Project Detail</div>
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}
