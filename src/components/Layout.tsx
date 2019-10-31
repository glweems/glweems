import * as React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import Landing from './Landing'
import { IndexMain } from '../pages'
import { TagsMain } from '../pages/tags'
import { Main } from '../theme'

interface Props extends LayoutProps {
  path: string
  [key: string]: any
}

const DefaultLayout: React.FC<Props> = ({ children }) => (
  <>
    <Navbar key="navbar" />
    <Main>{children}</Main>
    <Footer key="footer" />
  </>
)

const IndexLayout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Landing />
    <Navbar key="navbar" />
    <IndexMain>{children}</IndexMain>
    <Footer key="footer" />
  </>
)

interface LayoutProps {
  children: React.ReactNode
}

const TagsLayout: React.FC<LayoutProps> = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <TagsMain>
      {children}
      <Footer />
    </TagsMain>
  </React.Fragment>
)

const Layout: React.FC<Props> = ({ children, path, ...rest }) => {
  if (path === '/') return <IndexLayout {...rest}>{children}</IndexLayout>
  if (path === '/tags/') return <TagsLayout {...rest}>{children}</TagsLayout>
  return (
    <DefaultLayout path={path} {...rest}>
      {children}
    </DefaultLayout>
  )
}

export default Layout
