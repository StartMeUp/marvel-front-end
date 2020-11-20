import React from "react";
import "./index.css";

const Pagination = ({ setOffset, total, setIsLoading }) => {
  const pages = Math.ceil(total / 100);
  const nums = [];
  for (let i = 1; i <= pages; i++) {
    nums.push(i);
  }

  return (
    <div id="pagination">
      <ul>
        {nums.map((num) => {
          return (
            <li
              key={num}
              onClick={() => {
                setIsLoading(true);
                setOffset((num - 1) * 100);
              }}
            >
              {num}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
