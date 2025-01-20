import { ForecastProps } from "../types/weatherTypes";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Forecast({ forecastWeatherData }: ForecastProps) {
  const labels = forecastWeatherData.map((day) => day.date);
  const temperatures = forecastWeatherData.map((day) => day.temperature);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Daily Temperature (°C)",
        data: temperatures,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "5-Day Temperature Forecast",
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return (
    <div className="forecast-chart bg-white p-4 rounded shadow">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
