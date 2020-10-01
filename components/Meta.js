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

const title = 'Carbon'
const description =
  'Carbon is the easiest way to create and share beautiful images of your source code.'
export const MetaTags = React.memo(() => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content={description} />
    <meta name="application-name" content={title} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@carbon_app" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://carbon.now.sh/static/brand/banner.png" />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:image" content="/static/brand/banner.png" />
    <meta name="theme-color" content={COLORS.BLACK} />
    <title>{title} | Create and share beautiful images of your source code</title>
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/static/brand/apple-touch-icon.png" />
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
