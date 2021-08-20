import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../styles/components/experienceRow.css";
import DateRange from "./dateRange";

function ExperienceRow({ title, company, imgSrc, startDates, endDates, link }) {
  return (
    <Row className="py-2">
      <Col className="exp-first-col">
        <Link to={link}>
          <img
            src={imgSrc}
            alt={company + " logo"}
            title={company + " logo"}
            height={100}
          />
        </Link>
      </Col>
      <Col className="exp-second-col d-flex flex-column justify-content-center px-0">
        <Link to={link}>
          <h3 className="text-light mb-2">{title}</h3>
        </Link>
        <h5 className="text-muted">
          <DateRange startDates={startDates} endDates={endDates} />
        </h5>
      </Col>
    </Row>
  );
}

ExperienceRow.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  startDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  endDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};

export default ExperienceRow;
