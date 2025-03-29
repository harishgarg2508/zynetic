import { WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = ({ weatherData, darkMode }) => {
  if (!weatherData) return null;

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-6 mt-6 max-w-md mx-auto`}>
      <div className="text-center">
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{weatherData.name}</h2>
        <div className="flex justify-center items-center">
          <img 
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
            className="w-24 h-24"
          />
        </div>
        <p className={`text-5xl font-bold my-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {Math.round(weatherData.main.temp)}°C
        </p>
        <p className={`text-xl capitalize ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {weatherData.weather[0].description}
        </p>
      </div>
      
      <div className="flex justify-around mt-6">
        <div className="flex items-center">
          <WiHumidity className="text-3xl text-blue-500" />
          <div className="ml-2">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Humidity</p>
            <p className="text-lg font-semibold">{weatherData.main.humidity}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <WiStrongWind className="text-3xl text-blue-500" />
          <div className="ml-2">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Wind Speed</p>
            <p className="text-lg font-semibold">{weatherData.wind.speed} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;