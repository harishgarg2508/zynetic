import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FiSearch, FiRefreshCw, FiMoon, FiSun } from 'react-icons/fi';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchHistory from './components/SearchHistory';

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const UNITS = 'metric';
const HISTORY_LIMIT = 5;
const FORECAST_INTERVAL = 8;

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark bg-gray-900' : 'bg-gray-100';
  }, [darkMode]);

  const fetchWeatherAndForecast = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const [{ data: weather }, { data: forecast }] = await Promise.all([
        axios.get(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=${UNITS}`),
        axios.get(`${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=${UNITS}`),
      ]);

      setWeatherData(weather);
      setForecastData(forecast.list.filter((_, i) => i % FORECAST_INTERVAL === 0).slice(0, HISTORY_LIMIT));
      setSearchHistory((prev) => [cityName, ...prev.filter((c) => c !== cityName)].slice(0, HISTORY_LIMIT));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data');
      setWeatherData(null);
      setForecastData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) fetchWeatherAndForecast(city.trim());
  };

  return (
    <div className={`min-h-screen p-4 transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <FiSun className="text-2xl" /> : <FiMoon className="text-2xl" />}
          </button>
        </div>

        <h1 className="text-4xl font-bold text-center mb-8">Weather App</h1>

        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <FiSearch className="text-xl" />
          </button>
          {weatherData && (
            <button type="button" onClick={() => fetchWeatherAndForecast(weatherData.name)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              <FiRefreshCw className="text-xl" />
            </button>
          )}
        </form>

        {loading && <div className="text-center mt-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div></div>}
        {error && <p className="text-center mt-8 text-red-500">{error}</p>}

        {weatherData && <WeatherCard weatherData={weatherData} darkMode={darkMode} />}
        {forecastData && <ForecastCard forecast={forecastData} darkMode={darkMode} />}
        {searchHistory.length > 0 && <SearchHistory history={searchHistory} onCitySelect={fetchWeatherAndForecast} darkMode={darkMode} />}
      </div>
    </div>
  );
}

export default App;
