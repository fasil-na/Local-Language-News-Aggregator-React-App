import React, { useState, useEffect } from "react";
import "./WeatherInfo.scss";
import axios from 'axios';

function WeatherInfo() {
  const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
          );
          setWeather(weatherResponse.data);
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [OPEN_WEATHER_API_KEY]);

  return (
    <div>
      <h1>Local Language News Aggregator</h1>
      {weather && (
        <div className="weather-info">
          <h2>Weather Information</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
