import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ItemGrid = ({ endpoint }) => {
  return (
    <div className="grid-wrapper">
      {endpoint.map((item) => {
        return (
          <Link to={`/characters/${item.id}`} key={item.id}>
            <div className="grid-item-card">
              <div
                className="item-description"
                style={{
                  backgroundImage: `url(${
                    item.thumbnail.path + "." + item.thumbnail.extension
                  })`,
                }}
              >
                <div>
                  <p className={item.description ? undefined : "hidden"}>
                    {item.description}
                  </p>
                  <button
                    onClick={() => {
                      console.log("Bouton cliqué");
                    }}
                  >
                    Add to favorites
                  </button>
                </div>
              </div>
              <h3>{item.name ? item.name : item.title}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ItemGrid;
