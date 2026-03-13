import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`
  );

  return response.data;
};