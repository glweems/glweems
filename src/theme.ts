import { transparentize } from 'polished'
import { useState } from 'react'
import { useMedia } from 'react-use'
import { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'
import { variant } from 'styled-system'
import useDarkMode from 'use-dark-mode'

export interface BaseColors {
  blue: string
  green: string
  mint: string
  purple: string
  red: string
  yellow: string
  light: string
  dark: string
}

export const baseColors = {
  blue: '#1769ff',
  green: '#4caf50',
  mint: '#a7e3cc',
  purple: '#d0c1fa',
  red: '#e44932',
  yellow: '#f8d58c',
  light: '#f8f8f8',
  dark: '#0f121b',
}
export type AddedColors = {
  primary: string
  muted: string
  text: string
  bg: string
  rootBg: string
  borderColor: string
  secondaryText: string
  secondaryBg: string
  welcome: string
  link: string
}

export type ThemeColorVariant = keyof typeof baseColors

export type ColorObject = typeof baseColors & AddedColors

const lightMode: ColorObject = {
  ...baseColors,
  primary: baseColors.red,
  muted: '#5a5a5a',
  text: '#252d3d',
  bg: '#fff',
  rootBg: '#f8f8f8',
  borderColor: '#c6c7c6',
  secondaryText: 'rgba(0, 0, 0, 0.54)',
  secondaryBg: 'rgba(0, 0, 0, 0.05)',
  welcome: baseColors.yellow,
  link: baseColors.blue,
}

const darkmode: ColorObject = {
  ...baseColors,
  primary: baseColors.yellow,
  muted: '#c6c7c6',
  text: '#f7f7f7',
  bg: '#0f121b',
  rootBg: '#181D2B',
  borderColor: '#1b2027',
  secondaryText: 'rgba(255, 255, 255, 0.54)',
  secondaryBg: 'rgba(255, 255, 255, 0.05)',
  welcome: baseColors.purple,
  link: baseColors.yellow,
}

export const breakpoints = ['360px', '550px', '750px', '1000px', '1300px']
const [sm, md, lg] = breakpoints

export const containerWidths = {
  sm,
  md,
  lg,
}

export const media = generateMedia<typeof containerWidths, GlweemsTheme>({
  sm,
  md,
  lg,
})
export const borders = [0, '1px solid', '2px solid']

export const fontWeights = {
  body: 400,
  bold: 700,
  extraBold: 800,
  heading: 700,
}

export const fonts = {
  body:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  system:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  sans:
    'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  heading:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  brand:
    'Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
  monospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  serif: 'Georgia, Times New Roman, Times, serif',
}

export const fontSizes = [
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.25rem',
  '2.625rem',
  '3rem',
  '3.375rem',
  '3.75rem',
  '4.25rem',
  '4.75rem',
  '5.25rem',
  '5.75rem',
]

export const space = [
  '0rem',
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
  '3.5rem',
  '4rem',
  '4.5rem',
]

export const buttons = {
  secondary: {
    color: 'white',
    bg: 'tomato',
  },
}

export const radii = [0, '2px', '4px', '8px', '16px', '9999px', '100%']
export type DottedBgArgs = {
  dotColor: keyof ColorObject | string
  dotBgColor: keyof ColorObject | string
  dotSize?: number
  dotSpace?: number
  transparent?: number
  degree?: number
}

export const dottedBg = ({
  dotColor = 'text',
  dotBgColor = 'bg',
  dotSize = 1,
  dotSpace = 22,
  transparent = 1,
  degree = 90,
}: DottedBgArgs) => css`
  --dot-color: ${({ theme }) => theme.colors[dotColor] || dotColor};
  --dot-bg-color: ${({ theme }) => theme.colors[dotBgColor] || dotBgColor};
  background: linear-gradient(
        ${degree}deg,
        var(--dot-bg-color),
        ${dotSpace - dotSize}px,
        transparent ${transparent}%
      )
      center,
    linear-gradient(
        var(--dot-bg-color),
        ${dotSpace - dotSize}px,
        transparent ${transparent}%
      )
      center,
    var(--dot-color);
  background-size: ${dotSpace}px ${dotSpace}px;
`

const partialTheme = {
  breakpoints,
  containerWidths,
  borders,
  fontWeights,
  fonts,
  fontSizes,
  space,
  radii,
  media,
  buttons,
  dottedBg,
}

export interface GlweemsTheme {
  breakpoints: typeof breakpoints
  containerWidths: typeof containerWidths
  borders: typeof borders
  fontWeights: typeof fontWeights
  fonts: typeof fonts
  fontSizes: typeof fontSizes
  /**
   * Space
   *
   * |  Key 	| Value   	|
   * | -----	| --------	|
   * | 0    	| 0       	|
   * |   1  	| 0.25rem 	|
   * |   2  	| 0.5rem  	|
   * |   3  	| 0.75rem 	|
   * |   4  	| 1rem    	|
   * |   5  	| 1.25rem 	|
   * |   6  	| 1.5rem  	|
   * |   7  	| 2rem    	|
   * |   8  	| 2.5rem  	|
   * |   9  	| 3rem    	|
   * |  10  	| 3.5rem  	|
   * |  11  	| 4rem    	|
   * |  12  	| 4.5rem  	|
   */
  space: string[]
  radii: typeof radii
  media: typeof media
  buttons: typeof buttons
  toggle: () => void
  isDarkMode: boolean
  colors: ColorObject
  mode: string | 'light' | 'dark'
  isNavOpen: boolean
  setIsNavOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleNav(): void
  mobile: boolean
  dottedBg: typeof dottedBg
}

export default function useCreateTheme(): GlweemsTheme {
  const { value: isDarkMode, toggle } = useDarkMode()
  const mode = isDarkMode ? 'dark' : 'light'
  const colors = isDarkMode ? darkmode : lightMode
  const [isNavOpen, setIsNavOpen] = useState(false)
  const mobile = useMedia(`(max-width: ${breakpoints[0]})`)

  function toggleNav() {
    setIsNavOpen((state) => !state)
  }

  const completeTheme = {
    colors,
    isDarkMode,
    mode,
    toggle,
    isNavOpen,
    setIsNavOpen,
    toggleNav,
    mobile,
    ...partialTheme,
  }

  return completeTheme
}

export const buttonCss = css`
  padding: 8px 10px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
  text-decoration: none;
  background: transparent;
  background-color: ${({ theme }) => transparentize(0.95, theme.colors.text)};
  border: none;
  border: ${({ theme }) =>
    `${theme.borders[1]} ${transparentize(0.85, theme.colors.text)}`};
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  fill: ${({ theme }) => theme.colors.text};
  text-anchor: middle
    ${variant({
      scale: 'buttons',
      variants: {
        primary: {
          color: 'white',
          bg: 'primary',
        },
        secondary: {
          color: 'white',
          bg: 'secondary',
        },
      },
    })};
`

function createColorVars(colorsObj: ColorObject) {
  const obj = {}

  Object.entries(colorsObj).forEach(
    ([key, value]) => (obj[`--color-${key}`] = value)
  )

  return obj
}
export const cssVariables = css`
  ${(props) => props && createColorVars(props.theme.colors)}
`
