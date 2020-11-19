import React from "react";

const ItemGrid = ({ endpoint }) => {
  return (
    <div className="grid-wrapper">
      {endpoint.map((item) => {
        return (
          <div className="grid-item-card" key={item.id}>
            <div className="item-description">
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt={item.name ? item.name : item.title}
              />
              <div className="item-description-layer">
                <p>{item.description}</p>
              </div>
            </div>
            <h3>{item.name ? item.name : item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ItemGrid;
