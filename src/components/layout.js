import React from "react";
import PropTypes from "prop-types";

import { GlobalStyle } from "../styles/components/layout.styles";
import "../styles/components/layout.css"
import Header from "./header";
import Footer from "./footer";

function Layout({ children, active, hideFooter }) {
  return (
    <>
      <GlobalStyle />
      <Header active={active} />
      <main className="mx-auto">
        {children}
      </main>
      {!hideFooter && (
        <Footer />
      )}
    </>
  );
}

Layout.defaultProps = {
  active: undefined,
  hideFooter: false
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  hideFooter: PropTypes.bool
};

export default Layout;
