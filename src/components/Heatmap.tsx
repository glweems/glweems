import React from 'react'
import GithubCalendar from 'react-github-calendar'
import { GithubCalendarProps } from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import { useTheme } from 'styled-components'

export const Heatmap = () => {
  const { colors } = useTheme()

  const theme: GithubCalendarProps['theme'] = {
    text: colors.text,
  }

  return (
    <GithubCalendar username="glweems" fullYear years={[2020]} theme={theme}>
      <ReactTooltip delayShow={35} html />
    </GithubCalendar>
  )
}

export default Heatmap
