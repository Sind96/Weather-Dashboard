import { useState } from "react";

export default function SearchBar() {
  const [city, setCity] = useState("");

  return (
    <div>
      <form>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        ></input>
      </form>
    </div>
  );
}
