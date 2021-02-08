import { WrapPageElementBrowserArgs, WrapRootElementBrowserArgs } from 'gatsby'
import React, { memo } from 'react'
import { ThemeProvider } from 'styled-components'
import SEO from './components/SEO'
import Layout from './layout/Layout'
import useCreateTheme from './theme'
import GlobalCss from './utils/GlobalCss'

export type ContextProviderProps = {
  children: WrapRootElementBrowserArgs['element']
}

function ContextProvider(props: ContextProviderProps) {
  const theme = useCreateTheme()
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export function wrapRootElement({ element }: WrapRootElementBrowserArgs) {
  return <ContextProvider>{element}</ContextProvider>
}

export const wrapPageElement = ({
  element,
  props: { path },
}: WrapPageElementBrowserArgs) => {
  return (
    <React.Fragment>
      <SEO />
      {/* <GlobalCss /> */}
      <Layout path={path}>{element}</Layout>
    </React.Fragment>
  )
}

wrapPageElement.displayName = 'wrapPageElement'
