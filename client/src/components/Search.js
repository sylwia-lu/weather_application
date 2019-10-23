import React from "react";

function Search(props) {
  return (
    <div className="search">
      <input
        onChange={props.change}
        type="text"
        className="form-control"
        placeholder="Wpisz miasto"
      />
    </div>
  );
}

export default Search;
