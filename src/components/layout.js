import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Footer, GlobalStyle, Main } from "../styles/components/layout.styles";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar/>
      <Main>
        {children}
      </Main>
      <Footer>
        Suhas Dara&emsp;|&emsp;
        <FontAwesomeIcon icon={faGithub}/>&ensp;
        <a href="https://www.github.com/suhasdara">Github</a>&emsp;|&emsp;
        <FontAwesomeIcon icon={faLinkedin}/>&ensp;
        <a href="https://www.linkedin.com/in/suhas-dara">LinkedIn</a>
      </Footer>
    </>
  );
};

export default Layout;
