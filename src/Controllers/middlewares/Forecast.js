import Forecast from "../../Model/Forecast";
import {
  getWeatherDataFail,
  getWeatherDataRequest,
  getWeatherDataSuccess,
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAIL,
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_SUCCESS,
  normalizeData,
  NORMALIZE_DATA,
} from "../actions/Forecast";
import { forecastActions } from "../reducers/Forecast";

const API_KEY = "7b407d07d162288754366283288a9c25";

export const getWeatherDataMdl =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === GET_WEATHER_DATA) {
      dispatch(getWeatherDataRequest(action.payload));
      dispatch(forecastActions.showLoading());
    }
  };

export const getWeatherDataRequestMdl =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === GET_WEATHER_DATA_REQUEST) {
      try {
        //perform API call
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/forecast?q=${action.payload}&appid=${API_KEY}`
        );
        const data = await response.json();
        if (data.cod !== "200") {
          throw new Error({ message: data.message });
        }
        //onSuccess
        dispatch(getWeatherDataSuccess(data));
      } catch (error) {
        dispatch(getWeatherDataFail(error));
      }
    }
  };

export const processGetWeatherDataResultMdl =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === GET_WEATHER_DATA_SUCCESS) {
      dispatch(normalizeData(action.payload));
    } else if (action.type === GET_WEATHER_DATA_FAIL) {
      dispatch(forecastActions.showError(action.payload));
      dispatch(forecastActions.hideLoading());
    }
  };

export const normalizeDataMdl =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action);

    if (action.type === NORMALIZE_DATA) {
      //normalizeData
      const weatherData = action.payload;
      let normalizedWeatherData = [];
      weatherData.list.forEach((currDayWeather) => {
        const dateString = new Date(currDayWeather.dt_txt).toString();
        const slicedDateString = dateString.slice(
          0,
          dateString.indexOf("(") - 10
        );
        const day = slicedDateString.slice(0, slicedDateString.indexOf(" "));
        const date = slicedDateString.slice(
          slicedDateString.indexOf(" ") + 1,
          slicedDateString.lastIndexOf(" ")
        );
        const time = slicedDateString.slice(
          slicedDateString.lastIndexOf(" ") + 1
        );

        const forecastData = new Forecast(
          date,
          day,
          time,
          currDayWeather.main.temp_max,
          currDayWeather.main.temp_min,
          currDayWeather.main.humidity,
          currDayWeather.weather[0].main,
          currDayWeather.weather[0].icon
        );
        normalizedWeatherData.push(forecastData);
      });

      //after normalization
      dispatch(forecastActions.setWeatherData(normalizedWeatherData));
      dispatch(forecastActions.hideLoading());
    }
  };

export const forecastMdl = [
  getWeatherDataMdl,
  getWeatherDataRequestMdl,
  processGetWeatherDataResultMdl,
  normalizeDataMdl,
];
