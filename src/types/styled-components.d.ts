import { GlweemsTheme } from '../theme'

declare module 'styled-components' {
  export interface ThemeProps<T> {
    theme: T
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends GlweemsTheme {}
}
