import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ArtistsContainer from "./Artists/ArtistsContainer";
import NewArtistForm from "./Artists/NewArtistForm";
export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/artists" component={ArtistsContainer} />
        <Route exact path="/artists/new" component={NewArtistForm} />
      </Switch>
    </Router>
  );
};

export default App;
