import React from "react";
import PropTypes from "prop-types";

import { GlobalStyle } from "../styles/components/layout.styles";
import "../styles/components/layout.css";
import Header from "./header";
import Footer from "./footer";

function Layout({ children, active, hideFooter }) {
  return (
    <>
      <GlobalStyle />
      <Header active={active} />
      <main className="d-flex flex-column flex-fill px-3 mb-3 mx-auto">
        {children}
      </main>
      <Footer hideFooter={hideFooter} />
    </>
  );
}

Layout.defaultProps = {
  active: undefined,
  hideFooter: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  hideFooter: PropTypes.bool,
};

export default Layout;
