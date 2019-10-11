declare module '@mdx-js/react' {
  import React, { ComponentType, StyleHTMLAttributes } from 'react'

  type MDXProps = {
    children: React.ReactNode
    components: { code: React.ReactNode }
  }
  export class MDXProvider extends React.Component<MDXProps> {}
  export const mdx: any
}
