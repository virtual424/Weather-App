import { createSlice } from "@reduxjs/toolkit";

const weatherInitialState = { weatherData: [], pending: false, error: "" };

const forecastSlice = createSlice({
  name: "weather",
  initialState: weatherInitialState,
  reducers: {
    setWeatherData(state, action) {
      state.weatherData = action.payload;
    },
    showLoading(state, action) {
      state.pending = true;
    },
    hideLoading(state, action) {
      state.pending = false;
    },
    showError(state, action) {
      state.error = action.payload.message;
    },
  },
});

export const forecastActions = forecastSlice.actions;
export default forecastSlice.reducer;
