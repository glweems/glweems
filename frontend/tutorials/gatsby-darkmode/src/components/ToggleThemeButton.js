import React from 'react'
import { connect } from 'react-redux'
import { toggleTheme } from '../state/actions'

const ToggleThemeButton = ({ toggleTheme }) => (
  <button type='button' onClick={toggleTheme}>
    toggle dark mode
  </button>
)

const mapDispatchToProps = {
  toggleTheme,
}

export default connect(
  null,
  mapDispatchToProps
)(ToggleThemeButton)
