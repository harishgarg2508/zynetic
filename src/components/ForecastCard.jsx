import { WiHumidity } from 'react-icons/wi';

const ForecastCard = ({ forecast, darkMode }) => {
  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-6 mt-6 max-w-4xl mx-auto`}>
      <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}>
            <p className={`text-sm font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
              {formatDate(day.dt)}
            </p>
            <div className="flex justify-center">
              <img 
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
                className="w-16 h-16"
              />
            </div>
            <p className={`text-2xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {Math.round(day.main.temp)}°C
            </p>
            <p className={`text-sm text-center capitalize ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {day.weather[0].description}
            </p>
            <div className="flex items-center justify-center mt-2">
              <WiHumidity className="text-xl text-blue-500" />
              <span className={`text-sm ml-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {day.main.humidity}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;