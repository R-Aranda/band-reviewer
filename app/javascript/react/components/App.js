import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ArtistsContainer from "./Artists/ArtistsContainer";
import NewArtistForm from "./Artists/NewArtistForm";
import ArtistShowPage from "./Artists/ArtistShowPage";
import UserPage from "./Users/UserPage";

export const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/artists" component={ArtistsContainer} />
        <Route exact path="/artists/new" component={NewArtistForm} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
        <Route exact path="/users/:id" component={UserPage} />
        <Route exact path="/" component={ArtistsContainer} />
      </Switch>
    </Router>
  )
}

export default App
