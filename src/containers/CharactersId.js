import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemGrid from "../components/ItemGrid";
import FavButton from "../components/FavButton";
import SimplePagination from "../components/SimplePagination";
import axios from "axios";
import Loader from "react-loader-spinner";

const CharactersId = ({ userFavs, manageFavs }) => {
  // console.log("userFavs =>", userFavs);
  // console.log("manageFavs =>", manageFavs);
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [character, setcharacter] = useState({});
  const [comics, setComics] = useState();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const characterResponse = await axios.get(
        `https://marvel-backend-smu.herokuapp.com/characters/${params.id}`
      );
      setcharacter(characterResponse.data);

      const comicsResponse = await axios.get(
        `https://marvel-backend-smu.herokuapp.com/characters/${params.id}/comics?&limit=100&offset=${offset}`
      );
      setComics(comicsResponse.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id, offset]);

  return isLoading ? (
    <main className="flex-center">
      <div className="container">
        <Loader type="Puff" color="#E62429" height={100} width={100} />
      </div>
    </main>
  ) : (
    <main>
      <div className="container">
        <div className="item-details">
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.name}
          />
          <div>
            <h1>{character.name}</h1>
            {character.description ? (
              <p>No description</p>
            ) : (
              <p>{character.description}</p>
            )}
            <FavButton
              id={character.id}
              manageFavs={manageFavs}
              userFavs={userFavs}
            />
          </div>
        </div>
        <h2>Featured in :</h2>
        <ItemGrid
          endpoint={comics}
          manageFavs={manageFavs}
          userFavs={userFavs}
        />
        {comics.length >= 100 && (
          <SimplePagination
            offset={offset}
            setOffset={setOffset}
            total={comics.total}
            setIsLoading={setIsLoading}
          />
        )}
      </div>
    </main>
  );
};

export default CharactersId;
