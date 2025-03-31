import { WiHumidity } from "react-icons/wi";
import InfoCard from "./InfoCard";

// ForecastCard Component
const ForecastCard = ({ forecast, theme }) => {
  return (
    <div
      className={`rounded-lg contrast-100 shadow-lg text-black shadow-indigo-500 border-x-8 border-t-8 border-amber-300 p-6 mt-6 max-w-4xl mx-auto ${theme}`}
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

// ForecastDayCard Component
const ForecastDayCard = ({ day, theme }) => {
  // Helper function to format the date
  const formatDate = (timestamp) =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(new Date(timestamp * 1000));

  // Extracting the  necessary data from the day object
  const { dt, main, weather } = day;
  const { temp, humidity } = main;
  const { icon, description } = weather[0];

  return (
    <div
      className={`p-4 text-sm rounded-lg border-x-4 border-b-4 border-amber-500 shadow-lg shadow-indigo-500/50 contrast-100 ${theme}`}
    >
      {/* Date */}
      <p className="font-semibold">{formatDate(dt)}</p>

      {/* Weather Icon */}
      <div className="flex justify-center hover:animate-spin">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
      </div>

      {/* Weather Description */}
      <p className="text-center capitalize animate-pulse">{weather[0].main}</p>

      {/* Temperature */}
      <p className="text-2xl font-bold text-center hover:animate-ping">
        {Math.round(temp)}°C
      </p>

      <p className="text-center capitalize">{description}</p>

      {/* Humidity Information */}
      <div className="flex justify-around mt-6">
        <InfoCard
          icon={<WiHumidity className="text-3xl text-violet-800" />}
          label="Humidity"
          value={`${humidity}%`}
        />
      </div>
    </div>
  );
};

export default ForecastCard;