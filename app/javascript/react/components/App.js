import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ArtistsContainer from "./Artists/ArtistsContainer";
import ArtistShowPage from "./Artists/ArtistShowPage";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route  exact path="/artists" component={ArtistsContainer} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
        <Route exact path="/" component={ArtistsContainer} />
      </Switch>
    </Router>
  );
};

export default App;
