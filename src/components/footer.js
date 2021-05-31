import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-2 text-center bg-light text-dark">
      <Row className="d-flex justify-content-center mx-1 my-0">
        <span className="d-inline-block px-2">
          The Suhas Space
        </span>
        <span className="d-inline-block px-2">
          <FontAwesomeIcon icon={faGithub} />&ensp;
          <a href="https://www.github.com/suhasdara">Github</a>
        </span>
        <span className="d-inline-block px-2">
          <FontAwesomeIcon icon={faLinkedin} />&ensp;
          <a href="https://www.linkedin.com/in/suhas-dara">LinkedIn</a>
        </span>
      </Row>
      <hr className="mx-3 my-0" />
      <Row className="d-flex justify-content-center mx-1 my-0">
        <span className="d-inline-block px-1">
          © Suhas Dara 2021,
        </span>
        <span className="d-inline-block px-1">
          Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </span>
      </Row>
    </footer>
  );
};

export default Footer;
