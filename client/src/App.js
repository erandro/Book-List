import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <div>
    <Nav />
    <Router>
      <Switch>
        <Route path="/" exact component={Books} />
        <Route path="/Books" exact component={Books} />
        <Route path="/Books/:id" exact component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default App;
