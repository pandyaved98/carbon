// Theirs
import React from 'react'
import Router from 'next/router'

import Editor from './Editor'

import { THEMES } from '../lib/constants'
import { updateRouteState } from '../lib/routing'
import { getThemes, saveThemes, clearSettings, saveSettings } from '../lib/util'

function onReset() {
  clearSettings()
  updateRouteState(Router, {})

  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => {
        registration.unregister()
      })
    })
  }
}

function EditorContainer(props) {
  const [themes, updateThemes] = React.useState(THEMES)

  React.useEffect(() => {
    const storedThemes = getThemes(localStorage) || []
    if (storedThemes) {
      updateThemes(currentThemes => [...storedThemes, ...currentThemes])
    }
  }, [])

  React.useEffect(() => {
    saveThemes(themes.filter(({ custom }) => custom))
  }, [themes])

  // XXX use context
  const [snippet, setSnippet] = React.useState(props.snippet || null)

  const snippetId = snippet && snippet.id
  React.useEffect(() => {
    if ('/' + (snippetId || '') === props.router.asPath) {
      return
    }
    window.history.pushState(null, null, '/' + (snippetId || ''))
    // props.router.replace(props.router.asPath, '/' + (snippetId || ''), { shallow: true })
  }, [snippetId, props.router])

  function onEditorUpdate(state) {
    updateRouteState(props.router, state)
    saveSettings(state)
  }

  return (
    <>
      <Editor
        {...props}
        themes={themes}
        updateThemes={updateThemes}
        snippet={snippet}
        setSnippet={setSnippet}
        onUpdate={onEditorUpdate}
        onReset={onReset}
      />
    </>
  )
}

export default EditorContainer
