import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../styles/components/projectCard.css";
import DateRange from "./dateRange";

const ProjectCardImg = (props) => {
  return (
    <div className="d-flex justify-content-center align-items-center pb-2 card-img-top-div">
      <img {...props} />
    </div>
  )
};

function ProjectCard({ title, imgSrc, startDates, endDates, link }) {
  return (
    <Card className="bg-light text-center mb-3">
      <Card.Img as={ProjectCardImg} src={imgSrc} variant="top" />
      <Card.Body className="d-flex flex-column justify-content-center">
        <Card.Title className="text-dark">
          {title}
        </Card.Title>
        <Card.Subtitle className="text-muted">
          <DateRange startDates={startDates} endDates={endDates} />
        </Card.Subtitle>
      </Card.Body>
      <Link to={link} className="stretched-link" />
    </Card>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  startDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  endDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired
}

export default ProjectCard;
