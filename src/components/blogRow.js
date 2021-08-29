import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../styles/components/blogRow.css";

function BlogRow({ title, date, timeToRead, excerpt, link }) {
  date = new Date(date);
  date = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Row className="py-3">
      <Col>
        <Row>
          <Col
            className="blog-first-col d-flex flex-column justify-content-center px-0"
            md="10" xs="12"
          >
            <Link to={link}>
              <h3 className="text-light mb-md-2 mb-1">{title}</h3>
            </Link>
          </Col>
          <Col
            className="blog-second-col d-flex flex-column justify-content-center align-items-md-end px-0"
            md="2" xs="12"
          >
            <h5 className="text-muted mb-md-0 mb-1">{date}</h5>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-column justify-content-center px-0">
            <h6 className="my-0 font-weight-normal">
              <strong><em>{timeToRead} min. read: </em></strong>
              {excerpt}&nbsp;
              <Link to={link}>Read more</Link>
            </h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

BlogRow.defaultProps = {
  excerpt: "",
}

BlogRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  excerpt: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default BlogRow;
