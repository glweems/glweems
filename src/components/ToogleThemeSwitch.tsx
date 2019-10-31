/* eslint-disable import/no-named-default */
import React from 'react'
import { ThemeContext as StyledThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { ThemeContext } from './ContextProvider'
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'

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
