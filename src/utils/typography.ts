import Typography, { TypographyOptions } from 'typography';
import CodePlugin from 'typography-plugin-code';
import githubTheme from 'typography-theme-github';

let theme: TypographyOptions & { plugins: [] };
theme = githubTheme;

const typography = new Typography(theme);
(typography as any).plugins = [new CodePlugin()];

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
