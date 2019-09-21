import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';

export default ({ children, className, live, render }: any) => {
  const language = className.replace(/language-/, '');
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={code => `/** @jsx mdx */${code}`}
        scope={{ mdx }}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    );
  }
  if (render) {
    return (
      <LiveProvider code={children}>
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Highlight {...defaultProps} code={children.trim()} language={language}>
      {({
        className: defaultClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre className={defaultClassName} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={`line-${line[i]}`} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span
                  key={`token-${token}`}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
