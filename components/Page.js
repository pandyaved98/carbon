import React from 'react'
import Meta from './Meta'

class Page extends React.Component {
  render() {
    const { children } = this.props
    return (
      <main className="main">
        <Meta />
        <div className="page">{children}</div>
        <style jsx>
          {`
            .main {
              margin-bottom: 16px;
            }
          `}
        </style>
      </main>
    )
  }
}

export default Page
