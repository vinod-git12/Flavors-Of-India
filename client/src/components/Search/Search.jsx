import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Search Restaurants"
          value={props.value}
          onChange={(e) => props.onChange(e)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Search;
