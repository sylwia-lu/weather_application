import React from "react";

function Result(props) {
  const {
    error,
    city,
    date,
    description,
    temp_min,
    temp_max,
    pressure,
    humidity,
    wind_speed,
    sunrise,
    sunset
  } = props.data;

  let content = null;

  if (!error && city) {
    content = (
      <>
        <h2> {city.charAt(0).toUpperCase() + city.slice(1)}</h2>
        <ul className="list-group">
          <li className="list-group-item">
            Dane dla dnia i godziny: <strong>{date}</strong>
          </li>
          <li className="list-group-item">
            <strong>{description}</strong>
          </li>
          <li className="list-group-item">
            Temperatura min: <strong>{temp_min} &#8451;</strong>
          </li>
          <li className="list-group-item">
            Temperatura max: <strong>{temp_max} &#8451;</strong>
          </li>
          <li className="list-group-item">
            Ciśnienie: <strong>{pressure} hPa</strong>
          </li>
          <li className="list-group-item">
            Wilogotność: <strong>{humidity} %</strong>
          </li>
          <li className="list-group-item">
            Siła wiatru: <strong>{wind_speed} m/s</strong>
          </li>
          <li className="list-group-item">
            Wschód słońca: <strong>{sunrise}</strong>
          </li>
          <li className="list-group-item">
            Zachód słońca: <strong>{sunset}</strong>
          </li>
        </ul>
      </>
    );
  }
  return (
    <div className="result">
      {error ? `Nie mamy w bazie miasta ${city}` : content}
    </div>
  );
}

export default Result;
