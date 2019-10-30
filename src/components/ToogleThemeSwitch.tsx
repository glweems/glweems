/* eslint-disable import/no-named-default */
import React from 'react'
import styled, { ThemeContext as StyledThemeContext, css } from 'styled-components'
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import Switch from 'react-switch'
import { Button } from './Common/Button'
import { ThemeContext } from './ContextProvider'
import { yellow, bg, text, darkYellow, base } from '../theme'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

const Toggle = styled(Button)`
  color: ${text};
  background: ${bg};
  border-color: ${yellow};
  :hover {
    border-color: ${darkYellow};
  }
`
interface Props {
  className?: string
}

export const ToogleThemeSwitch: React.FC<Props> = ({ className }) => {
  const { mode } = React.useContext(StyledThemeContext)
  const { toggleTheme } = React.useContext(ThemeContext)

  return (
    <Switch
      className={className}
      onChange={toggleTheme}
      checked={mode === 'dark'}
      onColor="#222"
      offColor="#333"
      checkedIcon={<Moon />}
      uncheckedIcon={<Sun />}
      boxShadow="0 0 2px 3px #B38CD9"
      activeBoxShadow="0 0 2px 3px #dfb3e6"
    />
  )
}
