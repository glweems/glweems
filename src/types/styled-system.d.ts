import { Theme as MyTheme } from '../theme';

declare module 'styled-system' {
  export interface Theme extends MyTheme {}
}
