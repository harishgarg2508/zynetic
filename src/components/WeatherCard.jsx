import { WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = ({ weatherData, darkMode }) => {
  if (!weatherData) return null;

  const { name, main, weather, wind } = weatherData;
  const { temp, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div className={`rounded-lg shadow-lg p-6 mt-6 max-w-md mx-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">{name}</h2>
        <div className="flex justify-center">
          <img 
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="w-24 h-24"
            aria-label="Weather Icon"
          />
        </div>
        <p className="text-5xl font-bold my-2">{Math.round(temp)}°C</p>
        <p className="text-xl capitalize text-gray-400">{description}</p>
      </div>
      
      <div className="flex justify-around mt-6">
        <InfoCard icon={<WiHumidity className="text-3xl text-blue-500" />} label="Humidity" value={`${humidity}%`} />
        <InfoCard icon={<WiStrongWind className="text-3xl text-blue-500" />} label="Wind Speed" value={`${wind.speed} km/h`} />
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-2">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default WeatherCard;
