import { WiHumidity } from 'react-icons/wi';

const ForecastCard = ({ forecast, darkMode }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 mt-6 max-w-4xl mx-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <ForecastDayCard key={index} day={day} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

const ForecastDayCard = ({ day, darkMode }) => {
  const formatDate = (timestamp) =>
    new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).format(new Date(timestamp * 1000));

  return (
    <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
      <p className="text-sm font-semibold text-gray-400">{formatDate(day.dt)}</p>
      <div className="flex justify-center">
        <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description} className="w-16 h-16" />
      </div>
      <p className="text-2xl font-bold text-center">{Math.round(day.main.temp)}°C</p>
      <p className="text-sm text-center capitalize text-gray-400">{day.weather[0].description}</p>
      <div className="flex items-center justify-center mt-2">
        <WiHumidity className="text-xl text-blue-500" />
        <span className="text-sm ml-1 text-gray-400">{day.main.humidity}%</span>
      </div>
    </div>
  );
};

export default ForecastCard;
