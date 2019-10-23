import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Wpisz miasto"
            aria-label="Wpisz miasto"
            aria-describedby="Wpisz miasto"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
