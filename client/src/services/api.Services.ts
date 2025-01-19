const API_KEY = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/";

export async function fetchCurrentWeather(city: string) {
  try {
    const response = await fetch(
      `${baseUrl}weather?q=${city}&appid=${API_KEY}`
    );
    const jsonResponse = await response.json();
    // console.log("Parsed Current Weather Response:", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("Error fetchCurrentWeather:", error);
    throw error;
  }
}

export async function fetchForecastWeather(city: string) {
  try {
    const response = await fetch(
      `${baseUrl}forecast?q=${city}&appid=${API_KEY}`
    );
    const jsonResponse = await response.json();
    // console.log("Parsed Forecast Weather Response:", jsonResponse);
    return jsonResponse;
  } catch (error) {
    console.error("Error fetchForecastWeather:", error);
    throw error;
  }
}
