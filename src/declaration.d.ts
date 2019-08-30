// import original module declarations
import 'styled-components';
import { Colors } from '.';

export type GitHubCalendar = React.Component;
declare module 'gatsby-image';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: Colors;
    lightColors: Colors;
    darkColors: Colors;
    shadow: string;
    hoverShadow: string;
  }
}
