import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FiSearch, FiRefreshCw, FiMoon, FiSun } from 'react-icons/fi';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import SearchHistory from './components/SearchHistory';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const UNITS = 'metric';
const HISTORY_LIMIT = 5;
const FORECAST_INTERVAL = 8;

function App() {

  //defining all states
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  const theme = darkMode ? 'dark bg-gray-900 text-white' : 'light bg-amber-100 border-sky-200 text-black';
 
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);



  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setSearchHistory(storedHistory);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  
  const updateSearchHistory = (cityName) => {
    setSearchHistory(prevHistory => {
      const updatedHistory = [cityName, ...prevHistory.filter(c => c !== cityName)].slice(0, HISTORY_LIMIT);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };
  
  
  const fetchWeatherAndForecast = useCallback(async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        axios.get(`${BASE_URL}/weather?q=${cityName}&appid=${API_KEY}&units=${UNITS}`),
        axios.get(`${BASE_URL}/forecast?q=${cityName}&appid=${API_KEY}&units=${UNITS}`),
      ]);
      const fiveDayForecast = forecastRes.data.list.filter((_, i) => i % FORECAST_INTERVAL === 0).slice(0, 5);
      setWeatherData(weatherRes.data);
      setForecastData(fiveDayForecast);
      updateSearchHistory(cityName);
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
    <div className={`min-h-screen p-4 transition-colors ${theme}`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
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
            className={`flex-1 border-4 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme}`}
          />
          <button type="submit" className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600`}>
            <FiSearch className="text-xl" />
          </button>
          {weatherData && (
            <button type="button" onClick={() => fetchWeatherAndForecast(weatherData.name)} className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
              <FiRefreshCw className="text-xl" />
            </button>
          )}
        </form>
        {searchHistory.length > 0 && <SearchHistory history={searchHistory} onCitySelect={fetchWeatherAndForecast} theme={theme} />}

        {loading && <div className="text-center mt-8"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div></div>}
        {error && <p className="text-center mt-8 text-red-500">{error}</p>}

        {weatherData && <WeatherCard weatherData={weatherData} theme={theme} />}
        {forecastData && <ForecastCard forecast={forecastData} theme={theme} />}
      </div>
    </div>
  );
}

export default App;
