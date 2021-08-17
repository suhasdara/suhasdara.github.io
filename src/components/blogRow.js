import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../styles/components/blogRow.css";

function BlogRow({ title, date, timeToRead, link }) {
  date = new Date(date);
  date = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Row className="py-2">
      <Col className="main-col d-flex flex-column justify-content-center px-0">
        <Link to={link}>
          <h3 className="text-light mb-2">{title}</h3>
        </Link>
        <h5 className="text-muted">
          <p className="my-0">
            <span className="d-inline-block">{date}</span>
          </p>
          <p className="my-0">
            <span className="d-inline-block">{timeToRead} min. read</span>
          </p>
        </h5>
      </Col>
    </Row>
  );
}

BlogRow.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

export default BlogRow;
