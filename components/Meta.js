import React from 'react'
import Head from 'next/head'
import { COLORS } from '../lib/constants'
import Reset from './style/Reset'
import Font from './style/Font'
import Typography from './style/Typography'

export function Link({ href }) {
  return (
    <Head>
      <link rel="preload" as="style" href={href} />
      <link rel="stylesheet" href={href} />
    </Head>
  )
}

export const CodeMirrorLink = () => <Link href="/static/css/codemirror.min.css" />

const title = 'Lithograph'
const description = 'Code snippet designer'
export const MetaTags = React.memo(() => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content={description} />
    <meta name="application-name" content={title} />
    <meta name="theme-color" content={COLORS.BLACK} />
    <title>{title}</title>
  </Head>
))

export const MetaLinks = React.memo(() => {
  return (
    <React.Fragment>
      <CodeMirrorLink />
    </React.Fragment>
  )
})

export default React.memo(function Meta() {
  return (
    <React.Fragment>
      <MetaTags />
      <Reset />
      <Font />
      <Typography />
    </React.Fragment>
  )
})
