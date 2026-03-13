import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import { getWeather } from "../../api/weather.api";

const WeatherPage = () => {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const fetchWeather = async () => {

    if (!city) {
      setError("Please enter city name");
      return;
    }

    setLoading(true);
    setError(null);

    try {

      const data = await getWeather(city);

      setWeather({
        location: data.location.name,
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        humidity: data.current.humidity,
      });

    } catch (err) {

      console.error(err);
      setError('Failed to fetch weather data');

    } finally {

      setLoading(false);

    }

  };


  useEffect(() => {

    if (!city) return;

    const interval = setInterval(() => {
      fetchWeather();
    }, 300000);

    return () => clearInterval(interval);

  }, [city]);


  return (

    <div className="min-h-screen bg-blue-100">

      <Navbar />

      <div className="flex flex-col items-center mt-10">

        <h1 className="text-3xl font-bold mb-6">
          Weather App
        </h1>

        <div className="flex gap-3 w-80">

          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            onClick={fetchWeather}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>

        </div>


        {error && (
          <p className="text-red-500 mt-4">
            {error}
          </p>
        )}

        {loading && (
          <p className="mt-4">
            Loading weather...
          </p>
        )}

        {weather && !loading && (

          <div className="bg-white p-6 rounded shadow mt-6 w-80 text-center">

            <h2 className="text-xl font-semibold">
              {weather.location}
            </h2>

            <p className="text-3xl font-bold mt-2">
              {weather.temp}°C
            </p>

            <p className="mt-2">
              {weather.condition}
            </p>

            <p className="mt-2">
              Humidity: {weather.humidity}%
            </p>

          </div>

        )}

      </div>

    </div>

  );
};

export default WeatherPage;