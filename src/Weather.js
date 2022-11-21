import React from "react";
import "./Weather.css"

export default function Weather(){
  return <div className="Weather">
    <form>
    <div className="row">
     <div className="col-9">
     <input 
     type="search" 
     placeholder="Enter a city..."
     className="form-control"
     autoFocus="on"
     />
     </div>
     <div className="col-3">
     <input 
     type="submit" 
     value="Search"
     className="btn btn-primary w-100"
     />
     </div>
     </div>
    </form>
    <h1>New York</h1>
    <ul>
        <li>
            Wednesday 07:00
        </li>
        <li>Mostly Cloudy</li>
    </ul>
    <div className="row">
        <div className="col-6">
         <div className="mt-3">
            <img 
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="rainy"
            />
            
            <span className="temperature" >8</span>
            <span className="units">°C</span></div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 90%</li>
            <li>Humidity: 67%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>

    </div>
    </div>  
}