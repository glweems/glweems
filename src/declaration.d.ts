import { TypographyOptions } from 'typography';

declare module 'typography-theme-github' {
  let githubTheme: TypographyOptions;
  export default githubTheme;
}

declare module '*.svg' {
  const content: string;
  export default content;
}
