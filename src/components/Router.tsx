import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import Project from "pages/Project";
import Profile from "pages/Profile";
import Skill from "pages/Skill";
import Contact from "pages/Contact";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/about" component={About} />
        <Route exact path="/about/profile" component={Profile} />
        <Route exact path="/about/skill" component={Skill} />
        <Route exact path="/about/contact" component={Contact} />

        <Route exact path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
