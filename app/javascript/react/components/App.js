import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ArtistsIndexContainer from "./Artists/ArtistsIndexContainer";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route to="/" component={ArtistsIndexContainer} />
        <Route to="/artists" />
        {/* <Route to="/" /> */}
      </Switch>
    </Router>
  );
};

export default App;
