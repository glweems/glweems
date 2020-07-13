import React, { createElement } from 'react';
import rehypeReact from 'rehype-react';

export default function HtmlAst({ elements }) {
  const html = new rehypeReact({
    createElement,
  });

  return html.Compiler(elements);
}
