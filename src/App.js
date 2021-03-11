import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TeamDetails from "./components/TeamDetails/TeamDetails";

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/users"></Route>
          <Route exact path="/team/:teamId">
            <TeamDetails />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
