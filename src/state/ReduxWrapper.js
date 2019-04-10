/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { Provider } from 'react-redux'
import React from 'react'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from '.'

const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools())
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
