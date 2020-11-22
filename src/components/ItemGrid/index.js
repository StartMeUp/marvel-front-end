import React from "react";
import { Link } from "react-router-dom";
import FavButton from "../FavButton";
import "./index.css";

const ItemGrid = ({ endpoint, userFavs, manageFavs }) => {
  return (
    <div className="grid-wrapper">
      {endpoint.map((item) => {
        return (
          <div className="grid-item-card">
            <div
              className="item-description"
              style={{
                backgroundImage: `url(${
                  item.thumbnail.path + "." + item.thumbnail.extension
                })`,
                paddingTop: item.name ? "100%" : "154%",
              }}
            >
              <div>
                {item.description ? (
                  <p>{item.description.substr(0, 200) + " ..."}</p>
                ) : (
                  <p>No description</p>
                )}
                <FavButton
                  id={item.id}
                  manageFavs={manageFavs}
                  userFavs={userFavs}
                />
              </div>
            </div>
            <Link
              to={item.name ? `/characters/${item.id}` : `/comics/${item.id}`}
              key={item.id}
            >
              <h3>{item.name ? item.name : item.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemGrid;
