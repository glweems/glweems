import './src/styles/syntax.scss'
import React from 'react'

export { wrapRootElement } from './src/hooks/Providers.tsx'
export { wrapPageElement } from './src/hooks/Providers.tsx'
// in gastby-browser.js
export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
  return false
}
// export const wrapRootElement = ({ element }) => <div style={{ background: 'pink', height: '1000vh' }}>element</div>
