declare module 'react-github-calendar' {
  import React, { ComponentType, StyleHTMLAttributes } from 'react'

  type MDXProps = {
    username: string
    blockMargin?: number
    blockSize?: number
    color?: string
    dateFormat?: string
    fontSize?: number
    fullYear?: boolean
    theme?: {
      background: string
      text: string
      grade4: string
      grade3: string
      grade2: string
      grade1: string
      grade0: string
    }
    tooltips?: boolean
    years: number[]
    children?: any
  }
  class GithubCalendar extends React.Component<MDXProps> {}
  export default GithubCalendar
}
