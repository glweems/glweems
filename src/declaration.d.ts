// import original module declarations
import 'styled-components';

export type GitHubCalendar = React.Component;
declare module 'gatsby-image';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'dark' | 'light';
  }
}
