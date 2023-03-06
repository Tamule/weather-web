import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />
        <footer>
          This project was coded by Tamule Waites and is
          <a
            href="https://github.com/Tamule/weather-web"
            target="blank"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          
        </footer>
      </div>
    </div>
  );
}
