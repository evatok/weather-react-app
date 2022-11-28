
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">

<Weather defaultCity="New York" />

<footer>
  This project was coded by {" "}<a href="https://bucolic-liger-7233b0.netlify.app/index.html" target="_blank" rel="noreferrer" >Eva Tokarchuk</a>
   {" "}and is{" "} <a 
href="https://github.com/evatok/weather-react-app"
 target="_blank" rel="noreferrer" > open-sourced on GitHub</a>
 </footer>
    </div>
  );
}

