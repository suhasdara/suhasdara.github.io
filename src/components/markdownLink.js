import React from "react";
import { Link } from "gatsby";

export default function MarkdownLink(props) {
  const href = props.href;

  return (
    <>
      {href.startsWith("/") ? (
        <Link {...props} />
      ) : (
        <a {...props} rel="noopener noreferrer" target="_blank" />
      )}
    </>
  )
};
