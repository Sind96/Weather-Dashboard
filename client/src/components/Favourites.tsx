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
    try {
      const response = await fetch(`http://127.0.0.1:3000/favorites/${city}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setFavorites((prevFavorites: string[]) => {
          const updatedFavorites = prevFavorites.filter(
            (fav: string) => fav !== city
          );
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
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 mt-8">
      <h2 className="text-2xl font-semibold text-white">Favorite Cities</h2>
      <ul className="space-y-3">
        {favoriteCities.map((city) => (
          <li
            key={city}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:bg-gray-50"
          >
            <span className="text-lg font-semibold text-gray-800">{city}</span>
            <button
              onClick={() => handleDelete(city)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
