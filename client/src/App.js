import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Sprawdź pogodę</h1>
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
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Szukaj
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="result">
        <ul class="list-group list-group-horizontal-xl">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
