import { Routes, Route } from "react-router-dom";
import Forecast from "./View/pages/Forecast/Forecast";
import ForecastDetail from "./View/pages/ForecastDetail/ForecastDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Forecast />} />
      <Route path="/:city/:day" element={<ForecastDetail />} />
    </Routes>
  );
}

export default App;
