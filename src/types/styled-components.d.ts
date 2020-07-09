import { CSSProp } from 'styled-components';
import { GlweemsTheme } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends GlweemsTheme {}
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp<GlweemsTheme>;
  }
}
