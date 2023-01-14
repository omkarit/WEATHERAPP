import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Result.css";

const Result = (props) => {
  const [temprature, setTemprature] = useState(0);
  const [wind, setWind] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [weather, setWeather] = useState();

  const URL = "https://api.openweathermap.org/data/2.5/weather?q=";
  const locality = props.data;
  const API_KEY = "b543da68018a588fb6d38cc7890d0310";

  useEffect(() => {
    axios
      .get(URL + locality + "&appid=" + API_KEY)
      .then((e) => {
        setTemprature(e.data.main.temp);
        setWind(e.data.wind.speed);
        setHumidity(e.data.main.humidity);
        setWeather(e.data.weather[0].main);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [locality]);

  const resultStyle = (iurl) => ({
    backgroundImage: `url(${iurl})`,
    backgroundSize: `100vw 50vh`,
    height: `50vh`,
    width: `100vw`,
  });
  return (
    <>
      <div className="result-main-div" style={resultStyle(props.iurl)}>
        <div className="weather-data">
          <div className="temprature">
            <h2>{locality.toUpperCase()}</h2>
            <br />
            <h1>
              {(temprature - 273.15).toFixed(0)}
              {"\u00b0"}
            </h1>
            <br />
            <div className="weather">{weather}</div>
          </div>

          <div className="humidity">
            <span>HUMIDITY</span>
            <h1>{humidity}%</h1>
          </div>
          <hr className="vertical" />
          <div className="wind">
            <span>WIND</span>
            <h1>
              {wind.toFixed(0)} {"  "}K/M
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
