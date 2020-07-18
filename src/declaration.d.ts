import { GlweemsTheme } from './theme';
import { CSSProp } from 'styled-components';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
declare module 'styled-components' {
  export interface ThemeProps<T> {
    theme: T;
  }

  export interface DefaultTheme extends GlweemsTheme {}
}
declare module 'react' {
  interface Attributes {
    css?: CSSProp<GlweemsTheme>;
  }
}

declare module 'rehype-react' {
  interface RehypeOptions {
    createElement: any;
    components?: any;
    fragment: any;
  }
  export default class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
}
