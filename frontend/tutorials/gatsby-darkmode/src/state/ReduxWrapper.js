import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import rootReducer from './reducers'

const store = createStore(rootReducer, composeWithDevTools())

export default ({ element }) => <Provider store={store}>{element}</Provider>
