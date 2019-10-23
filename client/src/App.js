import React from "react";
import "./App.css";
import Search from "./components/Search";
import Result from "./components/Result";

const APIkey = "9919cb3e6ca0dd7040f1db77a1043efb";

class App extends React.Component {
  state = {
    error: false,
    city: "",
    date: "",
    description: "",
    temp_min: "",
    temp_max: "",
    pressure: "",
    humidity: "",
    wind_speed: "",
    sunrise: "",
    sunset: ""
  };

  handleChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { city } = this.state;

    if (city.length === 0) return;
    if (city !== prevState.city) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&APPID=${APIkey}`;
      fetch(API)
        .then(response => {
          if (response.ok) return response;
          throw Error("Nie udało się");
        })
        .then(response => response.json())
        .then(data => {
          const date = new Date().toLocaleString();
          this.setState({
            error: false,
            city,
            date,
            description: data.weather[0].description,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString()
          });
        })
        .catch(error => {
          this.setState({
            error
          });
        });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Sprawdź pogodę</h1>
        <Search change={this.handleChange} />
        <Result data={this.state} />
      </div>
    );
  }
}

export default App;
