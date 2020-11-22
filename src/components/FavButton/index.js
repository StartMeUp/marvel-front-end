import React from "react";
import "./index.css";

const FavButton = ({ id, userFavs, manageFavs }) => {
  // console.log("id =>", id);
  // console.log("userFavs =>", userFavs);
  // console.log("manageFavs =>", manageFavs);
  return (
    <button
      className={userFavs.includes(id) ? "isFav" : "isNotFav"}
      onClick={() => {
        manageFavs(id);
      }}
    >
      {userFavs.includes(id) ? (
        <span>
          In your Favorites.
          <br />
          Click to remove
        </span>
      ) : (
        "Add to favorites"
      )}
    </button>
  );
};

export default FavButton;
