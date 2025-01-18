const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchWeather = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  console.log(response);
  return response.json();
};
