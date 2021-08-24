import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";

import ModalImage from "./modalImage";

function Content({ children, className }) {
  return (
    <div className={className}>
      <MDXProvider
        components={{
          img: props => <ModalImage {...props} height={props.style.height} />,
          a: props => <a {...props} rel="noopener noreferrer" target="_blank" />,
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
  onlyExcerpt: false,
};

Content.propTypes = {
  onlyExcerpt: PropTypes.bool,
  children: PropTypes.any.isRequired,
}

export default Content;
