import { CSSObject, CSSProp } from 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {
    isDarkMode: boolean;
    toggle(): void;
  }
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
