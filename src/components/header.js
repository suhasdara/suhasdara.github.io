import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "gatsby";

import "../styles/components/header.css";

import Icon from "../../content/images/icon.png";

const Header = () => {
  return (
    <Navbar
      expand="md"
      variant="light"
      className="bg-light"
      collapseOnSelect
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="d-inline-flex py-2 align-items-center"
      >
        <img src={Icon} alt="The Suhas Space" height={30} className="mr-2" />
        <h3 className="d-inline-block">The Suhas Space</h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarResponsive" />
      <Navbar.Collapse id="navbarResponsive" className="bg-light">
        <Nav>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link as={Link} to="/experience">
              Experience
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;
