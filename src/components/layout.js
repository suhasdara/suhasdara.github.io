import React from "react";
import PropTypes from "prop-types"

import { GlobalStyle } from "../styles/components/layout.styles";
import "../styles/components/layout.css"
import Header from "./header";
import Footer from "./footer";

function Layout({ children, hideFooter }) {
  return (
    <>
      <GlobalStyle />
      <Header />
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
  hideFooter: false
};

Layout.propTypes = {
  hideFooter: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Layout;
