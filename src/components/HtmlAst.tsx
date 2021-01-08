import React from 'react'
import RehypeReact, { RehypeOptions } from 'rehype-react'

interface HtmlAstProps extends Partial<RehypeOptions> {
  elements: any
}
const HtmlAst: React.FC<HtmlAstProps> = ({
  elements,
  components,
  createElement,
}) => {
  const html = new RehypeReact({
    createElement: React.createElement,
    fragment: React.Fragment,
    components,
  })
  return html.Compiler(elements)
}

export default HtmlAst
