import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/images/marvel-logo-web.png";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <nav>
        <Link to="/">Characters</Link>
        <Link to="/comics">Comics</Link>
        <Link to="/favs">Favs</Link>
      </nav>
    </header>
  );
};

export default Header;
