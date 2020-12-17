import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import About from "pages/About";
import Project from "pages/Project";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Project} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
