import React, { useState, useEffect } from "react";
import ItemGrid from "../components/ItemGrid";
import Loader from "react-loader-spinner";
import axios from "axios";
//import charactersData from "../assets/data/characters.json";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend-smu.herokuapp.com/characters"
      );
      //console.log("response.data.result =>", response.data.results);
      setCharacters(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <main className="flex-center">
      <div className="container">
        <Loader type="Puff" color="#E62429" height={100} width={100} />
      </div>
    </main>
  ) : (
    <main>
      <div className="container">
        <h1>Characters</h1>
        <ItemGrid endpoint={characters} />
      </div>
    </main>
  );
};

export default Characters;
