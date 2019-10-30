import * as React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Landing from './Landing'

interface Props {
  children: React.ReactNode
  path: string
  [key: string]: any
}

const DefaultLayout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar key="navbar" />
    <main>{children}</main>
    <Footer key="footer" />
  </>
)

const IndexLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Landing />
    <Navbar key="navbar" />
    <main>{children}</main>
    <Footer key="footer" />
  </>
)

const Layout: React.FC<Props> = ({ children, path, ...rest }) => {
  if (path === '/') return <IndexLayout {...rest}>{children}</IndexLayout>
  return (
    <DefaultLayout path={path} {...rest}>
      {children}
    </DefaultLayout>
  )
}

export default Layout
