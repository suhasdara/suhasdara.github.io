import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";

import ModalImage from "./modalImage";

function Content({ children }) {
  return (
    <MDXProvider
      components={{
        img: props => <ModalImage {...props} height={props.style.height} />,
      }}
    >
      <MDXRenderer>
        {children}
      </MDXRenderer>
    </MDXProvider>
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
