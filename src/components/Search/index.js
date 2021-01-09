import React from "react";
import "./style.css";

function Search() {
  return (
    <form className="search d-flex">
      <div className="form-group">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </form>
  );
}

export default Search;
