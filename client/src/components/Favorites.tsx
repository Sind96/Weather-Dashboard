import { FavouritesProps } from "../types/weatherTypes";

export default function Favourites({
  favorites,
  setFavorites,
}: FavouritesProps) {
async function handleRemove () {
  
}

  return (
    <div>
      <h2>Favourites</h2>
      <ul>
        {favorites.map((city) => (
          <li key={city}>
            <span>{city}</span>
            <button onClick={() => handleRemove(city)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
