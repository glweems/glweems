import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import CodeBlock from '../CodeBlock';

const components = {
  pre: (props: any) => <pre {...props} />,
  code: CodeBlock,
};

export default ({ children }: any) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
