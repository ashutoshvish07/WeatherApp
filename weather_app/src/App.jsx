import React from "react";

import TopButtons from "./Components/TopButtons";
import Input from "./Components/Input";
import TimeAndLocation from "./Components/TimeAndLocation";
import TempAndDetail from "./Components/TempAndDetail";
import Forcast from "./Components/Forcast";
import { formateData } from "./Services/WeatherService";
const App = () => {
  
  const fetchWeather = async () =>{

    const data = await formateData({q:"Azamgarh"});
    console.log(data)
  }
  fetchWeather()
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-600 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Input />

      <TimeAndLocation />
      <TempAndDetail />
      <Forcast title="hourly forcaste" />
      <Forcast title="Daily forcaste" />
    </div>
  );
};

export default App;
