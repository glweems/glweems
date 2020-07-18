import React from 'react';
import RehypeReact from 'rehype-react';

export default function HtmlAst({ elements, components }) {
  const html = new RehypeReact({
    createElement: React.createElement,
    fragment: React.Fragment,
    components,
  });
  return html.Compiler(elements);
}
