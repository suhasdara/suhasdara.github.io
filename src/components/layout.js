import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { GlobalStyle } from "../styles/components/layout.styles";
import "../styles/components/layout.css";
import Header from "./header";
import Footer from "./footer";
import {Link} from "gatsby";

function Layout({ children, active, backLink, hideFooter }) {
  return (
    <>
      <GlobalStyle />
      <Header active={active} />
      <main className="d-flex flex-column flex-fill px-3 mb-3 mx-auto">
        {backLink && (
          <div className="back-button d-md-none pt-3">
            <Link to={backLink} className="d-inline-block text-white bg-dark px-1">
              <FontAwesomeIcon icon={faArrowLeft}/> Back
            </Link>
          </div>
        )}
        {children}
      </main>
      <Footer hideFooter={hideFooter} />
    </>
  );
}

Layout.defaultProps = {
  active: undefined,
  backLink: undefined,
  hideFooter: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.string,
  backLink: PropTypes.string,
  hideFooter: PropTypes.bool,
};

export default Layout;
