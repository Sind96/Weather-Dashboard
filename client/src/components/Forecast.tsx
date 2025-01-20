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

export default function Forecast({ forecastWeatherData }: ForecastProps) {
  console.log(forecastWeatherData);
  return <div></div>;
}
