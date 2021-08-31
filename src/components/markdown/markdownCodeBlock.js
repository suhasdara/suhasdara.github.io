// Code taken and modified from https://mdxjs.com/guides/syntax-highlighting

import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Highlight, { defaultProps } from "prism-react-renderer";

import "../../styles/components/markdown/markdownCodeBlock.css";

export default function MarkdownCodeBlock({children, className}) {
  const language = className.replace(/language-/, '');

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <>
          <div className="bar-above-pre d-flex">
            <div className="code-language-bar d-inline-block mb-0 mr-1 px-1">
              <span>{language}</span>
            </div>
            <Button
              variant="dark"
              className="copy-button d-inline-block ml-auto mb-1 py-0 px-1"
              onClick={() => {navigator.clipboard.writeText(children)}}
            >
              Copy <FontAwesomeIcon icon={faCopy} />
            </Button>
          </div>
          <pre className={className + " d-flex flex-column"} style={{...style}}>
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
        </>
      )}
    </Highlight>
  )
};
