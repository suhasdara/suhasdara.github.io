import React from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

function Footer({ hideFooter }) {
  return (
    <footer className="text-center text-dark bg-light">
      {!hideFooter && (
        <>
          <Row className="d-flex justify-content-center mx-1 my-0">
            <span className="d-inline-block px-2">The Suhas Space</span>
            <span className="d-inline-block px-2">
              <FontAwesomeIcon icon={faGithub} />
              &ensp;
              <a href="https://www.github.com/suhasdara">Github</a>
            </span>
            <span className="d-inline-block px-2">
              <FontAwesomeIcon icon={faLinkedin} />
              &ensp;
              <a href="https://www.linkedin.com/in/suhas-dara">LinkedIn</a>
            </span>
          </Row>
          <hr className="mx-3 my-0" />
        </>
      )}
      <Row className="d-flex justify-content-center mx-1 my-0">
        <span className="d-inline-block px-1">
          © Suhas Dara {new Date().getFullYear()},
        </span>
        <span className="d-inline-block px-1">
          Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
      </Row>
    </footer>
  );
}

Footer.defaultProps = {
  hideFooter: false,
};

Footer.propTypes = {
  hideFooter: PropTypes.bool,
};

export default Footer;
