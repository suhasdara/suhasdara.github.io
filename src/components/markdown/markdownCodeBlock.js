// Code taken and modified from https://mdxjs.com/guides/syntax-highlighting

import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

export default function MarkdownCodeBlock({children, className}) {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style}}>
          {tokens.map((line, i) => {
            return i !== tokens.length - 1 ?
              (
                <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                  ))}
                </div>
              ) : (
                <></>
              )
          })}
        </pre>
      )}
    </Highlight>
  )
};
