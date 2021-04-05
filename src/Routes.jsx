import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "Home"
import About from "About"
import Projects from "Projects"
import Posts from "Posts"

const Routes = () => {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/projects" render={() => <Projects />} />
        <Route path="/posts" render={() => <Posts />} />
      </Switch>
    </div>
  );
};

export default Routes;
