import { useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "../services/api.Services";

interface SearchBarProps {
  setCurrentWeather: (data: any) => void;
  setForecastData: (data: any) => void;
}

export default function SearchBar({
  setCurrentWeather,
  setForecastData,
}: SearchBarProps) {
  const [city, setCity] = useState("");

  async function handleSearch() {
    const weather = await fetchCurrentWeather(city);
    const forecast = await fetchForecastWeather(city);
    setCurrentWeather(weather);
    setForecastData(forecast);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
