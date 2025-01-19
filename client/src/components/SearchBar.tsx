import { useState } from "react";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
} from "../services/api.Services";
import { SearchBarProps } from "../types/weatherTypes";

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
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border p-2 rounded"
      ></input>
      <button
        onClick={handleSearch}
        className={`${
          city ? "bg-blue-500" : "bg-gray-300 cursor-not-allowed"
        } text-white px-4 py-2 rounded`}
        disabled={!city}
      >
        Search
      </button>
    </div>
  );
}
