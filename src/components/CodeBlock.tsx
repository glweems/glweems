/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

export default ({
  children,
  className,
}: {
  children: any;
  className: Language | any;
}) => {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={className ? className.replace(/language-/, '') : null}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={line[i].content} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={token.content} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
