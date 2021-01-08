import { GlweemsTheme } from '../theme'

export interface ThemeProps<T> {
  theme: T
}

export interface DefaultTheme extends GlweemsTheme {
  hi: 'yes'
}
