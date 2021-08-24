import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

import "../styles/pages/index.css";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SubscribeButton from "../components/subscribeButton";

import Logo from "../../content/images/icon.png";
import Suhas from "../../content/images/Suhas.jpg";

const Media = ({ icon, link }) => (
  <a
    href={link}
    rel="noopener noreferrer"
    target="_blank"
    className="text-dark out-btn"
  >
    <Button variant="light" className="py-0 px-2 my-3 mx-2">
      <FontAwesomeIcon icon={icon} />
    </Button>
  </a>
);

const IndexPage = () => {
  const [disabledAbout, setDisabledAbout] = useState(true);
  const mailto = "mailto:Suhas%20Dara%3csuhasdara@utexas.edu%3e?" +
    "subject=The%20Suhas%20Space%20(subject)"

  return (
    <Layout hideFooter={true}>
      <SEO title="Home" />
      <Container className="pt-2 my-auto">
        <Row>
          <Col lg="6" className="d-inline-flex justify-content-center">
            <img
              id="brand-img"
              src={Logo}
              width={500}
              alt="The Suhas Space Logo"
            />
          </Col>
          <Col
            lg="6"
            className="d-inline-flex justify-content-center flex-column"
          >
            <Row>
              <Col xs="12" className="d-inline-flex justify-content-center">
                <img
                  id="author-img"
                  src={Suhas}
                  height={250}
                  alt="Suhas Dara"
                />
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="d-inline-flex justify-content-center">
                <h2 className="mb-0 mt-2">Suhas Dara</h2>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="d-inline-flex justify-content-center">
                <Media icon={faEnvelope} link={mailto} />
                <Media
                  icon={faLinkedin}
                  link="https://www.linkedin.com/in/suhas-dara"
                />
                <Media
                  icon={faGithub}
                  link="https://www.github.com/suhasdara"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-inline-flex justify-content-center">
            <Button
              variant="light"
              onClick={() => setDisabledAbout(!disabledAbout)}
              className="p-2 m-2 det-btn"
            >
              A little introduction?
            </Button>
            <a
              href="/suhasdara_resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="text-dark"
            >
              <Button id="download" variant="light" className="p-2 m-2 det-btn">
                <FontAwesomeIcon icon={faDownload} /> Download Resume
              </Button>
            </a>
            <SubscribeButton text="Subscribe to blogs" className="p-2 m-2 det-btn" />
          </Col>
        </Row>
        {!disabledAbout && (
          <Row>
            <p className="mt-2 text-light">
              Hi there! I recently graduated from The University of Texas at
              Austin with a BS in Computer Science. I decided to put my skills
              in web development to the test by creating this website. I am
              striving to find what interests me best in Computer Science: it is
              data science, machine learning, and deep learning, as it stands.
              <Link to="/about"> Want to know more?</Link>
            </p>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default IndexPage;
