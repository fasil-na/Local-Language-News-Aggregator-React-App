import React, { useState, useEffect } from "react";
import "./WeatherInfo.scss";
import axios from "axios";

const WeatherInfo = () => {
  const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState("");

  // Fetch weather data and set background image on component mount

  useEffect(() => {
    const fetchWeather = async () => {
      try {

        // Get the user's current location

        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          
          // Fetch weather data from the OpenWeather API

          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
          );

          setWeather(weatherResponse.data);
          setWeatherBackground(weatherResponse.data.weather[0].main);
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
    
  }, [OPEN_WEATHER_API_KEY]);

  // Function to set background image based on weather condition

  const setWeatherBackground = (weatherMain) => {
    switch (weatherMain.toLowerCase()) {
      case "clear":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/clear.png)`);
        break;
      case "thunderstorm":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/thunderstorm.png)`);
        break;
      case "drizzle":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/drizzle.png)`);
        break;
      case "rain":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/rain.png)`);
        break;
      case "snow":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/snow.png)`);
        break;
      case "clouds":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/clouds.png)`);
        break;
      case "mist":
      case "smoke":
      case "haze":
      case "dust":
      case "fog":
      case "sand":
      case "ash":
      case "squall":
      case "tornado":
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/mist.png)`);
        break;
      default:
        setBackgroundImage(`url(${process.env.PUBLIC_URL}/Images/default.png)`);
        break;
    }
  };

  return (
    <div
      className="weather-info-container"
      style={{ backgroundImage: backgroundImage }}
    >
      {weather && (
        <div className="weather-info">
          <div className="top-info">
            <h2>{weather.main.temp}°C</h2>
          </div>
          <div className="bottom-info">
            <p>{weather.weather[0].main}</p>
            <p>{weather.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
