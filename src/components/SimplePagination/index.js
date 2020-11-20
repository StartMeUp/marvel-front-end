import React from "react";
import "./index.css";

const SimplePagination = ({ offset, setOffset, total, setIsLoading }) => {
  return (
    <div id="simple-pagination">
      <button
        disabled={offset === 0 && "disabled"}
        onClick={() => {
          setIsLoading(true);
          setOffset(offset - 100);
        }}
      >
        Previous
      </button>
      <button
        disabled={total - 100 < offset && "disabled"}
        onClick={() => {
          setIsLoading(true);
          setOffset(offset + 100);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default SimplePagination;
