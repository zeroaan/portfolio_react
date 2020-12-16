import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import Skill from "pages/Skill";
import Project from "pages/Project";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/skill" component={Skill} />
          <Route exact path="/project" component={Project} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
