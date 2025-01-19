import { WeatherProps } from "../types/weatherTypes";

export default function WeatherCard({ weather }: WeatherProps) {
  const tempInFarenheis = weather.main.temp;
  const temperature = Math.round((tempInFarenheis - 32) * (5 / 9) * 100) / 100;
  const description = weather.weather[0].description;
  const humidity = weather.main.humidity;
  const windSpeed = weather.wind.speed;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
}
