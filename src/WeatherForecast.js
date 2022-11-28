import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css"
import axios from "axios";

export default function WeatherForecast(props) {
function handleResponse(response) {
    console.log(response.data)
}
console.log(props)

    let apiKey = "b9ba0314a93083136d968577c718e31d";
    let lat = props.coordinates.lon;
    let lon = props.coordinates.lat;
    let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
   
   return (
    <div className="WeatherForecast">
      <div className="row mt-4">
        <div className="col">
           <div className="WeatherForecast-day">Thu</div>
           <WeatherIcon code="01d" size={32} />
           <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">19°</span>
            <span className="WeatherForecast-temp-min">10°</span>
            </div>
           </div>
           </div>  
    </div>

   );
}