import { ForecastWeatherData } from "../types/weatherTypes";

const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export async function fetchCurrentWeather(city: string) {
  try {
    const response = await fetch(
      `${baseUrl}weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const jsonResponse = await response.json();
    console.log("thisisresponse", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("Error fetchCurrentWeather:", error);
    throw error;
  }
}

export async function fetchForecastWeather(city: string) {
  try {
    const response = await fetch(
      `${baseUrl}forecast?q=${city}&units=metric&appid=${API_KEY}`
    );
    const jsonResponse = await response.json();
    const dailyForecast = jsonResponse.list.reduce(
      (
        acc: {
          date: string;
          temperature: number;
          weather: string;
          icon: string;
        }[],
        forecast: ForecastWeatherData["list"][0]
      ) => {
        const date = forecast.dt_txt.split(" ")[0];
        const [year, month, day] = date.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        if (!acc.find((entry) => entry.date === formattedDate)) {
          acc.push({
            date: formattedDate,
            temperature: Math.round(forecast.main.temp),
            weather: forecast.weather[0].description,
            icon: forecast.weather[0].icon,
          });
        }
        return acc;
      },
      []
    );

    return dailyForecast;
  } catch (error) {
    console.error("Error fetchForecastWeather:", error);
    throw error;
  }
}
