import RehypeReact from 'rehype-react';

import * as React from 'react';

interface Props {
  elements: object;
  components?: {
    [any: string]: React.FC<any>;
  };
}

export const HtmlAst: React.FC<Props> = ({ elements, components }) =>
  new RehypeReact({
    createElement: React.createElement,
    components
  }).Compiler(elements).props.children;

HtmlAst.defaultProps = { components: {} };
