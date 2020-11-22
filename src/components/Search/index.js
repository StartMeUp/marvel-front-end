import React, { useState } from "react";
import "./index.css";

const Search = ({ setSearch, type, setIsLoading }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(query);
  };
  return (
    <div id="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={`Search a ${type}`}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
