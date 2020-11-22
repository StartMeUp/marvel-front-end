import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// containers
import Characters from "./containers/Characters";
import CharactersId from "./containers/CharactersId";
import Comics from "./containers/Comics";
import ComicsId from "./containers/ComicsId";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  if (!Cookies.get("userFavs")) Cookies.set("userFavs", "[]");

  const [userFavs, setUserFavs] = useState(JSON.parse(Cookies.get("userFavs")));

  // console.log(Cookies.get("userFavs"));

  const manageFavs = (id) => {
    if (!userFavs.includes(id)) {
      const newUserFavs = [...userFavs];
      newUserFavs.push(id);
      setUserFavs(newUserFavs);
      Cookies.set("userFavs", JSON.stringify(newUserFavs));
    } else if (userFavs.includes(id)) {
      const newUserFavs = [...userFavs];
      const index = newUserFavs.indexOf(id);
      newUserFavs.splice(index, 1);
      setUserFavs(newUserFavs);
      Cookies.set("userFavs", JSON.stringify(newUserFavs));
    } else {
      alert("Ooops, something went wrong in setting up favs");
    }
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/comics/:id">
          <ComicsId userFavs={userFavs} manageFavs={manageFavs} />
        </Route>
        <Route path="/comics">
          <Comics userFavs={userFavs} manageFavs={manageFavs} />
        </Route>
        <Route path="/characters/:id">
          <CharactersId userFavs={userFavs} manageFavs={manageFavs} />
        </Route>
        <Route path="/">
          <Characters userFavs={userFavs} manageFavs={manageFavs} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
