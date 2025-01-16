import { useState } from "react";
import { fetchWeather } from "../services/api.Services";

export default function SearchBar() {
  const [city, setCity] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchWeather(city);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        ></input>
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}
