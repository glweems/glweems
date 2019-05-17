import { combineReducers } from 'redux'
import { TOGGLE_THEME } from './actions'

const initialState = {
  isDarkMode: false,
}

const theme = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      }
    default:
      return state
  }
}

export default combineReducers({ theme })
