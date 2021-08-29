import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";

import ModalImage from "./modalImage";
import MarkdownLink from "./markdownLink";

function Content({ children, className }) {
  return (
    <div className={className}>
      <MDXProvider
        components={{
          img: props => <ModalImage {...props} height={props.style.height} />,
          a: props => <MarkdownLink {...props} />,
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
