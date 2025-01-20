import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { ForecastWeatherDataTrim, WeatherData } from "../types/weatherTypes";
import Forecast from "../components/Forecast";
import Favourites from "../components/Favorites";

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecastData, setForecastData] = useState<ForecastWeatherDataTrim[]>(
    []
  );
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <div className="container mx-auto p-4 space-y-6">
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        setForecastData={setForecastData}
      />
      {currentWeather && <WeatherCard weatherCardData={currentWeather} />}
      {forecastData.length > 0 && (
        <Forecast forecastWeatherData={forecastData} />
      )}
      {/* <Favourites favoriteCities ={favorites} setFavorites={setFavorites} /> */}
    </div>
  );
}
