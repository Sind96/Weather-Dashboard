import { WeatherCardProps } from "../types/weatherTypes";

export default function WeatherCard({ weatherCardData }: WeatherCardProps) {
  const temperature = weatherCardData?.main?.temp;
  const description = weatherCardData?.weather?.[0]?.description || "N/A";
  const humidity = weatherCardData?.main?.humidity ?? "N/A";
  const windSpeed = weatherCardData?.wind?.speed ?? "N/A";

  return (
    <div className="p-4 bg-blue-100 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Current Weather</h2>
      <div className="space-y-1">
        <p>
          <span className="font-semibold">Temperature:</span> {temperature}°C
        </p>
        <p>
          <span className="font-semibold">Description:</span> {description}
        </p>
        <p>
          <span className="font-semibold">Humidity:</span> {humidity}%
        </p>
        <p>
          <span className="font-semibold">Wind Speed:</span> {windSpeed} m/s
        </p>
      </div>
    </div>
  );
}
