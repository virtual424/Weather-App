import React from "react";
import styles from "./WeatherCard.module.css";
import Card from "../../UI/Card";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WeatherCard = ({ weatherData, city }) => {
  const navigate = useNavigate();
  const weatherDataList = useSelector(
    (state) => state.forecastReducer.weatherData
  );

  return (
    <Card
      className={styles.weatherCard}
      onClick={() =>
        navigate(`/${city}/${weatherData.day}`, {
          state: { weatherData, weatherDataList },
        })
      }
    >
      <h3>{weatherData.day}</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt="weather condition icon"
      />
      <div className={styles.weatherDesc}>
        <p>
          <span>Time:</span>
          <span>{weatherData.time}</span>
        </p>
        <p>
          <span>Max Temp:</span>
          <span>{weatherData.highTemp}</span>
        </p>
        <p>
          <span>Min Temp:</span>
          <span>{weatherData.lowTemp}</span>
        </p>
        <p>
          <span>Humidity:</span>
          <span>{weatherData.humidity}</span>
        </p>
        <p>
          <span>Weather</span>
          <span>{weatherData.weather}</span>
        </p>
      </div>
    </Card>
  );
};

export default WeatherCard;
