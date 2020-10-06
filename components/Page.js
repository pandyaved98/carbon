import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const COLUMN = `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class Page extends React.Component {
  render() {
    const { children, flex } = this.props
    return (
      <main className="main mb3">
        <Meta />
        <Header />
        <div className="page">{children}</div>
        <Footer />

        <style jsx>
          {`
            .main {
              ${flex ? COLUMN : ''}
              margin-top: 6rem;
            }
            @media (min-width: 1024px) {
              .main {
                ${COLUMN};
              }
            }
          `}
        </style>
      </main>
    )
  }
}

export default Page
