import React from "react";
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { GlobalStyle } from "../styles/components/layout.styles";
import "../styles/components/layout.css"
import Header from "./header";

function Layout({ children, hideFooter }) {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <main className="mx-auto">
        {children}
      </main>
      {!hideFooter && (
        <footer className="mt-2 text-center bg-light text-dark">
          Suhas Dara&emsp;|&emsp;
          <FontAwesomeIcon icon={faGithub} />&ensp;
          <a href="https://www.github.com/suhasdara">Github</a>&emsp;|&emsp;
          <FontAwesomeIcon icon={faLinkedin} />&ensp;
          <a href="https://www.linkedin.com/in/suhas-dara">LinkedIn</a>
        </footer>
      )}
    </>
  );
}

Layout.defaultProps = {
  hideFooter: false
}

Layout.propTypes = {
  hideFooter: PropTypes.bool,
  children: PropTypes.node.isRequired
}

export default Layout;
