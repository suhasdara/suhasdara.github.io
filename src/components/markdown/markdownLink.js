import React from "react";
import { Link } from "gatsby";

export default function MarkdownLink(props) {
  const { href, children, ...rest } = props;

  return (
    <>
      {href.startsWith("/") && !href.endsWith(".pdf") ? (
        <Link to={href} {...rest}>
          {children}
        </Link>
      ) : (
        <a href={href} {...rest} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      )}
    </>
  )
};
