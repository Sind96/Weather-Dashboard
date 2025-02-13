import { WeatherCardProps } from "../types/types";

export default function WeatherCard({ weatherCardData }: WeatherCardProps) {
  const temperature = weatherCardData?.main?.temp;
  const description = weatherCardData?.weather?.[0]?.description || "N/A";
  const humidity = weatherCardData?.main?.humidity ?? "N/A";
  const windSpeed = weatherCardData?.wind?.speed ?? "N/A";

  return (
    <div className="bg-blue-600 p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-white">Current Weather</h2>
      <div className="text-lg text-white space-y-2">
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
