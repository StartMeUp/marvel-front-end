import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// containers
import Characters from "./containers/Characters";
import CharactersId from "./containers/CharactersId";
import Comics from "./containers/Comics";
import ComicsId from "./containers/ComicsId";
import Favs from "./containers/Favs";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/favs">
          <Favs />
        </Route>
        <Route path="/comics/:id">
          <ComicsId />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/characters/:id">
          <CharactersId />
        </Route>
        <Route path="/">
          <Characters />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
