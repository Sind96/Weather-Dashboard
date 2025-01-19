import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastData, setForecastData] = useState([]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        setForecastData={setForecastData}
      />
      {currentWeather && <WeatherCard weather={currentWeather} />}
    </div>
  );
}
