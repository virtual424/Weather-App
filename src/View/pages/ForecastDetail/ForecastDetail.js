import React from "react";
import Card from "../UI/Card";
import styles from "./ForecastDetail.module.css";
import { useLocation } from "react-router-dom";
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const ForecastDetail = () => {
  const { state } = useLocation();
  const { weatherData, weatherDataList } = state;
  const { day, icon, weather } = weatherData;
  const hourlyWeatherDataList = weatherDataList.filter(
    (item) => item.day === day
  );

  return (
    <Card className={styles.forecastDetail}>
      <div className={styles.dayDesc}>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="weather condition icon"
        />
        <div>
          <h2>{day}</h2>
          <p>{new Date().toLocaleTimeString()}</p>
          <p>{weather}</p>
        </div>
      </div>
      <ResponsiveContainer height={400}>
        <LineChart data={hourlyWeatherDataList} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis dataKey="highTemp" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="highTemp" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ForecastDetail;
