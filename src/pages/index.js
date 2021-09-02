import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

import "../styles/pages/index.css";
import Layout from "../components/layout";
import Seo from "../components/seo";
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
  const mailto = "mailto:Suhas%20Dara%3csuhasdara@utexas.edu%3e?" +
    "subject=The%20Suhas%20Space%20(subject)"
  console.log("Hi there! What are you trying to do?"); //For the cheeky folks

  return (
    <Layout hideFooter={true}>
      <Seo title="Home" />
      <Container className="pt-2 my-auto">
        <Row>
          <Col xl="5" lg="6" className="d-inline-flex justify-content-center">
            <img
              id="brand-img"
              src={Logo}
              width={500}
              alt="The Suhas Space Logo"
            />
          </Col>
          <Col
            xl="4" lg="3"
            className="d-inline-flex justify-content-center flex-column"
          >
            <Row>
              <Col xs="12" className="d-inline-flex justify-content-center">
                <img
                  id="author-img"
                  src={Suhas}
                  height={240}
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
          <Col
            lg="3"
            className="d-inline-flex justify-content-center flex-column mt-lg-0 mt-2"
          >
            <Row>
              <p className="text-light text-lg-right text-center mb-1">
                Hi there! I recently graduated from The University of Texas at
                Austin with a BS in Computer Science. I am striving to find what
                interests me best in the vast field that is Computer Science. I
                want to share my experiences and learning through writing blogs.
                So, do subscribe to them below!
              </p>
              <p
                className="text-light text-lg-right text-center"
                style={{width: "100%"}}
              >
                Read more about me <Link to="/about/">here</Link>
              </p>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-inline-flex justify-content-center">
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
            <SubscribeButton text="Subscribe to my blogs" className="p-2 m-2 det-btn" />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default IndexPage;
