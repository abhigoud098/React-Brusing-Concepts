import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState({});

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function showWeather() {
    wetherInfo();
  }

  async function wetherInfo() {
    const url = `http://api.weatherapi.com/v1/current.json?key=03f6567b5fd34e6c80805353251312&q=${inputValue}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();
    setWeatherData(data);
  }

  // useEffect(() => {
  //   wetherInfo();
  // }, [showWeather]);

  return (
    <>
      <div className="weather-app">
        <header className="weather-header">
          <h1>Weather App</h1>
        </header>

        <main className="weather-card">
          <h2 className="city-name">
            <input
              type="text"
              placeholder="Enter city name"
              value={inputValue}
              onChange={handleInput}
            />
            <button onClick={showWeather}>
              <span>Check</span>
            </button>
          </h2>

          <div className="icon-section">
            <img
              src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
              alt="Sunny"
              className="weather-icon"
            />
          </div>

          <p className="temperature">`${weatherData?.condition?.temp_c}`</p>
          <p className="description">Sunny</p>

          <div className="extra-info">
            <p>Humidity: 60%</p>
            <p>Wind: 10 km/h</p>
          </div>
        </main>

        <footer className="weather-footer">
          <p>Weather App © 2025</p>
        </footer>
      </div>
    </>
  );
}

export default App;
