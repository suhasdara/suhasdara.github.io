import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";

import ModalImage from "./modalImage";
import MarkdownLink from "./markdown/markdownLink";
import MarkdownCodeBlock from "./markdown/markdownCodeBlock";

function Content({ children, className }) {
  return (
    <div className={className}>
      <MDXProvider
        components={{
          img: props => <ModalImage
            {...props}
            height={props?.style?.height || "100%"}
          />,
          a: MarkdownLink,
          pre: props => <div {...props} />,
          code: MarkdownCodeBlock,
        }}
      >
        <MDXRenderer>
          {children}
        </MDXRenderer>
      </MDXProvider>
    </div>
  );
}

Content.defaultProps = {
  className: "",
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default Content;
