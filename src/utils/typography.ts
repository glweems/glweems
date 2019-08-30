import Typography from 'typography';
import Theme from 'typography-theme-github';

const typography = new Typography(Theme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
