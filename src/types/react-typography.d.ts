import Typography from 'typography'

declare module 'react-typography' {
  export const TypographyStyle: FC<{ typography: Typography }>
  export const GoogleFont: FC<{ typography: Typography }>
}
