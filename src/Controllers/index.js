import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./reducers/Forecast";
import { forecastMdl } from "./middlewares/Forecast";

const store = configureStore({
  reducer: {
    forecastReducer: forecastReducer,
  },
  middleware: [...forecastMdl],
});

export default store;
