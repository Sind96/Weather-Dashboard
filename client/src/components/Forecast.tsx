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
  console.log("tifd", forecastWeatherData);
  const labels = forecastWeatherData.map((day) => day.date);
  console.log("labels", labels);
  const temperatures = forecastWeatherData.map((day) => day.temperature);
  console.log("temperatures", temperatures);

  return <div></div>;
}
