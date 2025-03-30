import { WiHumidity } from "react-icons/wi";

const ForecastCard = ({ forecast, theme }) => {
  return (
    <div
      className={`rounded-lg contrast-100 shadow-lg text-black shadow-indigo-500 border-x-8 border-t-8  border-amber-300 p-6 mt-6 max-w-4xl mx-auto ${theme}`}
    >
      <h3 className="text-xl font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <ForecastDayCard key={index} day={day} theme={theme} />
        ))}
      </div>
    </div>
  );
};



const ForecastDayCard = ({ day, theme }) => {
  const formatDate = (timestamp) =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(new Date(timestamp * 1000));


  return (
    <div
      className={`p-4 text-sm rounded-lg border-x-4 border-b-4 border-amber-500 shadow-lg  shadow-indigo-500/50 contrast-100 ${theme}`}
    >
      <p className="font-semibold">
        {formatDate(day.dt)}
      </p>
      <div className="flex justify-center hover:animate-spin">
        <img
          src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].description}
          className="w-16 h-16"
        />
      </div>
      <p className="text-center capitalize animate-pulse">
        {day.weather[0].main}
      </p>
      <p className="text-2xl font-bold text-center hover:animate-ping">
        {Math.round(day.main.temp)}°C
      </p>
      
      <p className="text-center capitalize">
        {day.weather[0].description}
      </p>
      <div className="flex items-center justify-center mt-2">
        <WiHumidity className="animate-bounce text-2xl text-blue-500" />
        <span className="text-sm ml-1">{day.main.humidity}%</span>
      </div>
    </div>

  );
};

export default ForecastCard;
