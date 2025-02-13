import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { ForecastWeatherDataTrim, WeatherData } from "../types/types";
import Forecast from "../components/Forecast";
import Favourites from "../components/Favourites";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecastData, setForecastData] = useState<ForecastWeatherDataTrim[]>(
    []
  );
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <div className="bg-gray-900 min-h-screen text-Black p-6">
      <div className="max-w-4xl mx-auto">
        <SearchBar
          setCurrentWeather={setCurrentWeather}
          setForecastData={setForecastData}
        />
        {currentWeather && <WeatherCard weatherCardData={currentWeather} />}
        {forecastData.length > 0 && (
          <Forecast forecastWeatherData={forecastData} />
        )}
        <Favourites favoriteCities={favorites} setFavorites={setFavorites} />
      </div>
    </div>
  );
}
