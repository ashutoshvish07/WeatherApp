import React, { useEffect, useState } from "react";

import TopButtons from "./Components/TopButtons";
import Input from "./Components/Input";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetail from "./Components/TempAndDetail";
import Forcast from "./Components/Forcast";
import { formateData } from "./Services/WeatherService";
const App = () => {
  const [query, setquery] = useState({ q: "Azamgarh" });
  const [units, setunits] = useState("matric");
  const [weather, setweather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await formateData({ ...query, units }).then((data) => {
        setweather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  console.log("weather", weather);
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Input />
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TempAndDetail weather={weather} />
          <Forcast title="hourly forcaste" />
          <Forcast title="Daily forcaste" />
        </div>
      )}
    </div>
  );
};

export default App;
