import React from 'react'
import Head from 'next/head'
import { THEMES, THEMES_HASH, COLORS } from '../lib/constants'
import Reset from './style/Reset'
import Font from './style/Font'
import Typography from './style/Typography'

const HIGHLIGHTS_ONLY = ['shades-of-purple', 'vscode', 'a11y-dark']
const LOCAL_STYLESHEETS = ['one-light', 'one-dark', 'verminal', 'night-owl', 'nord', 'synthwave-84']
const CDN_STYLESHEETS = THEMES.filter(
  t => LOCAL_STYLESHEETS.indexOf(t.id) < 0 && HIGHLIGHTS_ONLY.indexOf(t.id) < 0
)

export function Link({ href }) {
  return (
    <Head>
      <link rel="preload" as="style" href={href} />
      <link rel="stylesheet" href={href} />
    </Head>
  )
}

export const StylesheetLink = ({ theme }) => {
  let href
  if (LOCAL_STYLESHEETS.indexOf(theme) > -1) {
    href = `/static/themes/${theme}.min.css`
  } else {
    const themeDef = THEMES_HASH[theme]
    href = `/static/themes/${themeDef && (themeDef.link || themeDef.id)}.min.css`
  }

  return <Link href={href} />
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
      <Link href="/static/themes/seti.min.css" />
      <CodeMirrorLink />
      {LOCAL_STYLESHEETS.map(id => (
        <Link key={id} href={`/static/themes/${id}.min.css`} />
      ))}
      {CDN_STYLESHEETS.map(themeDef => {
        const href = `/static/themes/${themeDef && (themeDef.link || themeDef.id)}.min.css`
        return <Link key={themeDef.id} href={href} />
      })}
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
