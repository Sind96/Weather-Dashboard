import { useState } from "react";
import { fetchWeather } from "../services/api.Services";

export default function SearchBar() {
  const [city, setCity] = useState("");

  const handleSearch = async (city: string, event) => {
    event.preventDefault();
    try {
      const data = await fetchWeather(city);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <form>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="border px-2 py-1"
        ></input>
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-3 py-1"
        >
          Search
        </button>
      </form>
    </div>
  );
}
