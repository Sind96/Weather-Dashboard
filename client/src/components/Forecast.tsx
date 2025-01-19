import { ForecastWeatherData } from "../types/weatherTypes";
import { Line } from "react-chartjs-2";

export default function Forecast({ forecast }: ForecastWeatherData) {
  const data = {
    labels: forecast.map((item) => item.day),
    datasets: [
      {
        label: "Temperature",
        data: forecast.map((item) => item.temperature),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Forecast</h2>
      <Line data={data} />
    </div>
  );
}
