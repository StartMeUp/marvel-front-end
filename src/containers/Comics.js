import React, { useState, useEffect } from "react";
import ItemGrid from "../components/ItemGrid";
import SimplePagination from "../components/SimplePagination";
import Loader from "react-loader-spinner";
import axios from "axios";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-smu.herokuapp.com/comics?&limit=100&offset=${offset}`
        );
        //console.log("response.data.result =>", response.data.results);
        setComics(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [offset]);

  return isLoading ? (
    <main className="flex-center">
      <div className="container">
        <Loader type="Puff" color="#E62429" height={100} width={100} />
      </div>
    </main>
  ) : (
    <main>
      <div className="container">
        <h1>Comics</h1>
        <ItemGrid endpoint={comics} />
        <SimplePagination
          offset={offset}
          setOffset={setOffset}
          total={comics.total}
          setIsLoading={setIsLoading}
        />
      </div>
    </main>
  );
};

export default Comics;
