import React from "react";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

const API =
  "http://api.openweathermap.org/data/2.5/weather?q=zamch&lang=pl&units=metric&APPID=9919cb3e6ca0dd7040f1db77a1043efb";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <h1>Sprawdź pogodę</h1>
        <Search />
        <Result />
      </div>
    );
  }
}

export default App;
