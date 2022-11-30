import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay"
import "./WeatherForecast.css"
import axios from "axios";
export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded) {
        return (
            <div className="WeatherForecast">
              <div className="row mt-4">
              <div className="col">
              <WeatherForecastDay data={forecast[0]} />
              </div>
              </div>
            </div>
          
           );
    }
    else  {
        let apiKey = "b9ba0314a93083136d968577c718e31d";
        let lat = props.coordinates.lon;
        let lon = props.coordinates.lat;
        let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}