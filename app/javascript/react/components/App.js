import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ArtistsContainer from "./Artists/ArtistsContainer";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route to="/" component={ArtistsContainer} />
        <Route to="/artists" />
      </Switch>
    </Router>
  );
};

export default App;
