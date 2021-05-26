import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Bar, MobileBar } from "../styles/components/navbar.styles";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Bar dropdown={dropdown}>
      <MobileBar>
        <Link id="logo" to="/">The Suhas Space</Link>
        <FontAwesomeIcon id="bars" icon={faBars} onClick={() => setDropdown(!dropdown)} />
      </MobileBar>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="/suhasdara_resume.pdf"
      >
        Resume
      </a>
    </Bar>
  );
};

export default Navbar;
