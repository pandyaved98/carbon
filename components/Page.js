import React from 'react'
import Meta from './Meta'

class Page extends React.Component {
  render() {
    const { children } = this.props
    return (
      <main className="main mb3">
        <Meta />
        <div className="page">{children}</div>
      </main>
    )
  }
}

export default Page
