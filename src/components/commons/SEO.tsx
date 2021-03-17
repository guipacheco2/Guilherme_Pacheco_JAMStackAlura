import Head from 'next/head'
import React from 'react'

export interface SEOProps {
  headTitle: string
}

export function SEO({ headTitle }: SEOProps): JSX.Element {
  const hasHeadTitle = Boolean(headTitle)
  const baseTitle = 'Guilherme Pacheco - Portfólio'
  const title = hasHeadTitle ? `${headTitle} | ${baseTitle}` : baseTitle

  const description = 'Projeto desenvolvido durante Bootcamp JAMStack do Alura'
  const image = 'https://source.unsplash.com/ZMraoOybTLQ/1200x627'
  const urlBase = 'portfolio-guipacheco2.vercel.app'

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  )
}
