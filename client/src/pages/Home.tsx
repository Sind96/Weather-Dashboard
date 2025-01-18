import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/api.Services";

export default function Home() {
  const [weather, setWeather] = useState("");

  const getWeather = async (city: string) => {
    try {
      const data = await fetchWeather(city);
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <SearchBar />
      </div>
    </div>
  );
}
