import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherData } from "../../../Controllers/actions/Forecast";
import Card from "../UI/Card";
import WeatherCard from "./Components/WeatherCard";
import styles from "./Forecast.module.css";

const Forecast = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [city, setCity] = useState("Mumbai");

  const weatherData = useSelector((state) => {
    let list = [];
    const data = state.forecastReducer.weatherData;
    for (let i = 0; i < data.length; i += 8) {
      list.push(data[i]);
    }
    return list;
  });

  useEffect(() => {
    dispatch(getWeatherData(city));
  }, [dispatch]);

  const searchWeatherHandler = () => {
    const value = inputRef.current.value;

    if (value.length !== 0) {
      setCity(value);
      dispatch(getWeatherData(value));
    }
  };

  return (
    <Card className={styles.forecast}>
      <div className={styles.searchContainer}>
        <input placeholder="Mumbai" type="text" ref={inputRef} />
        <button onClick={searchWeatherHandler}>Search</button>
      </div>
      <div className={styles.cityDesc}>
        <h2>{`India, ${city}`}</h2>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
      <div className={styles.weatherContainer}>
        {weatherData &&
          weatherData.map((currDayWeather) => {
            return (
              <WeatherCard
                key={currDayWeather.dt_txt}
                weatherData={currDayWeather}
                city={city}
              />
            );
          })}
      </div>
    </Card>
  );
};

export default Forecast;
