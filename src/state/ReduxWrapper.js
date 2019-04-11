/* eslint-disable react/prop-types */

import { Provider } from 'react-redux'
import React from 'react'
import { createStore } from 'state/store'

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
