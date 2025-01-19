import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { WeatherData } from "../types/weatherTypes";
import Forecast from "../components/Forecast";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecastData, setForecastData] = useState([]);

  console.log(currentWeather);
  return (
    <div className="container mx-auto p-4 space-y-6">
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        setForecastData={setForecastData}
      />
      {currentWeather && <WeatherCard weather={currentWeather} />}
      {forecastData.length > 0 && <Forecast forecast={forecastData} />}
    </div>
  );
}
