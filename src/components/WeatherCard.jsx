import { WiHumidity, WiStrongWind } from 'react-icons/wi';

const WeatherCard = ({ weatherData, theme }) => {  // receiving weatherData and theme as props
  if (!weatherData) return null;  //If no weatherData is available, return null to prevent rendering an empty component

  const { name, main, weather, wind } = weatherData;      // Destructuring the relevant properties from weatherData
  const { temp, humidity } = main;                        //Extracting the temperature and humidity
  const { description, icon} = weather[0];                // Extracting  weather description and icon

  return (
    <div className={`rounded-lg p-6 mt-6 max-w-md mx-auto border-t-8 border-x-8 border-amber-400  shadow-xl contrast-150  shadow-indigo-500 ${theme}`}>
      <div className="text-center">

        {/* City name with hover bounce animation */}
        <h2 className="text-3xl font-bold hover:transition-shadow hover:animate-bounce">{name}</h2>
        
        {/* Weather icon with hover spin animation */}
        <div className="hover:animate-spin flex  justify-center w-1/3 ml-32 bg-rose-300 rounded-full p-4 mt-4 shadow-lg shadow-indigo-500/50 sm:w-1/3 sm:ml-26">
          <img 
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            className="w-24 h-24"
          />
        </div>

        {/* Weather description with pulse animation */}
        <p className='text-2xl capitalize animate-pulse'>{weather[0].main}</p>

        {/* Temperature with bold font and hover ping animation */}
        <p className="text-5xl font-bold my-2 animate-pulse hover:animate-ping">{Math.round(temp)}°C</p>
        <p className="text-xl capitalize ">{description}</p>
      </div>
      
      {/* Information cards for humidity and wind speed */}
      <div className="flex justify-around mt-6">
        <InfoCard icon={<WiHumidity className="text-3xl text-violet-800" />} label="Humidity" value={`${humidity}%`} />
        <InfoCard icon={<WiStrongWind className="text-3xl text-violet-800" />} label="Wind Speed" value={`${wind.speed} km/h`} />
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center">
    <div className='animate-bounce'>
    {icon}
    </div>
    <div className="ml-2">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-lg font-semibold">{value}</p>
    </div>
  </div>
);

export default WeatherCard;
