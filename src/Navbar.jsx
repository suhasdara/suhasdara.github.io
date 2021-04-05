import React, { useState } from "react";

import BootstrapNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeKey, setActiveKey] = useState(undefined);

  return (
    <BootstrapNavbar
      expand="md"
      className="bg-dark"
      variant="dark"
      collapseOnSelect
    >
      <BootstrapNavbar.Brand
        as={Link}
        to="/"
        className="d-inline-flex py-2"
        onClick={() => setActiveKey("home")}
      >
        <h3>Suhas Dara</h3>
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbarResponsive" />
      <BootstrapNavbar.Collapse id="navbarResponsive" className="bg-dark">
        <Nav activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link eventKey="about" as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link eventKey="routes" as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="py-1 px-3 px-md-1">
            <Nav.Link eventKey="countries" as={Link} to="/posts">
              Posts
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
