import { useEffect } from "react";
import { FavouritesProps } from "../types/weatherTypes";

export default function Favourites({
  favoriteCities,
  setFavorites,
}: FavouritesProps) {
  // Fetch favorite cities
  useEffect(() => {
    async function fetchFavourites() {
      try {
        const response = await fetch("http://127.0.0.1:3000/favorites");
        const data = await response.json();
        setFavorites(data.map((fav: { city: string }) => fav.city));
      } catch (error) {
        console.error("fetchFavourites is not working", error);
        throw Error;
      }
    }
    fetchFavourites();
  }, [setFavorites]);

  // Delete a city from the favorites
  async function handleDelete(city: string) {
    console.log("City to delete:", city); // Logs the city to delete
    try {
      const response = await fetch(`http://127.0.0.1:3000/favorites/${city}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the favorites list after deletion
        setFavorites((prevFavorites: string[]) => {
          const updatedFavorites = prevFavorites.filter(
            (fav: string) => fav !== city
          );
          console.log("Updated favorites list:", updatedFavorites); // Correctly shows the updated list
          return updatedFavorites;
        });
      } else {
        console.error("Failed to delete city:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting favorite:", error);
    }
  }

  return (
    <div className="favorites-list bg-gray-100 p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Favorite Cities</h2>
      <ul className="space-y-2">
        {favoriteCities.map((city) => (
          <li
            key={city}
            className="flex justify-between items-center bg-white p-2 rounded shadow"
          >
            <span>{city}</span>
            <button
              onClick={() => handleDelete(city)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
