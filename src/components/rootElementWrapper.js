/* eslint-disable import/no-named-default */
/* eslint-disable react/prop-types */
import { Provider } from 'react-redux'
import React from 'react'
import { default as store } from 'state/store'

export default ({ element }) => <Provider store={store}>{element}</Provider>
