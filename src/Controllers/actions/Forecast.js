export const GET_WEATHER_DATA = "[weather] getWeatherData";
export const GET_WEATHER_DATA_REQUEST = "[weather] getWeatherDataRequest";
export const GET_WEATHER_DATA_SUCCESS = "[weather] getWeatherDataSuccess";
export const GET_WEATHER_DATA_FAIL = "[weather] getWeatherDataFail";
export const NORMALIZE_DATA = "[weather] normalizeData";

export const getWeatherData = (city) => {
  return {
    type: GET_WEATHER_DATA,
    payload: city,
  };
};
export const getWeatherDataRequest = (city) => {
  return {
    type: GET_WEATHER_DATA_REQUEST,
    payload: city,
  };
};
export const getWeatherDataSuccess = (data) => {
  return {
    type: GET_WEATHER_DATA_SUCCESS,
    payload: data,
  };
};
export const getWeatherDataFail = (error) => {
  return {
    type: GET_WEATHER_DATA_FAIL,
    payload: error,
  };
};

export const normalizeData = (data) => {
  return {
    type: NORMALIZE_DATA,
    payload: data,
  };
};
