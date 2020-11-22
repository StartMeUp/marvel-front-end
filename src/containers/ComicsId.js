import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

const ComicsId = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-backend-smu.herokuapp.com/comics/${params.id}`
      );
      setComic(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

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
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt={comic.name}
          />
          <div>
            <h1>{comic.title}</h1>
            {comic.description ? (
              <p>{comic.description}</p>
            ) : (
              <p>No description</p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ComicsId;
