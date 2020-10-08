import React from 'react'
import Meta from './Meta'

class Page extends React.Component {
  render() {
    const { children } = this.props
    return (
      <main className="main mb3">
        <Meta />
        <div className="page">{children}</div>
        <style jsx>
          {`
            .main {
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
            }
          `}
        </style>
      </main>
    )
  }
}

export default Page
