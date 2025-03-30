# Weather App 🌦️

A responsive weather application built with **React** and **Vite** that allows users to search for current weather and a 5-day forecast for any city. The app includes features like dark mode, search history, and a user-friendly interface.

---

## Features

- 🌤 **Current Weather**: Displays real-time weather data for the searched city.
- 📅 **5-Day Forecast**: Provides a 5-day weather forecast with key details.
- 🌙 **Dark Mode**: Toggle between light and dark themes for better user experience.
- 🕒 **Search History**: Keeps track of the last 5 searched cities for quick access.
- ⚡ **Responsive Design**: Fully responsive and optimized for all devices.
- ⚡ **Loader Animation**: Loader animation while data is being fetched.
- ⚡ **Basic animations**: Basic animations or transitions using Tailwind CSS .
- 🔄 **Refresh Weather**: Refresh the weather data for the current city.

---

## Demo
![image](https://github.com/user-attachments/assets/35635b40-40c9-4568-8356-c0968e452f05)
![image](https://github.com/user-attachments/assets/3ede1342-9f64-497e-878d-d2f757c9518e)


---

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)

---

## Installation

1.  <h1>Clone the repository:
   ```bash
   git clone https://github.com/harishgarg2508/zynetic.git
   cd zynetic
   npm install
   npm run dev
   https://localhost:5173
```

2. <h1>Project Structure
```bash
   src/
   ├── components/
   │   ├── ForecastCard.jsx       # Displays the 5-day weather forecast 
   │   ├── SearchHistory.jsx      # Displays the recent search history
   │   ├── WeatherCard.jsx        # Displays the current weather details
   ├── [App.jsx]                  # Main application component
   ├── index.css                  # Global styles
   └── main.jsx                   # Entry point for the React app
```

```bash
   Key Functionalities
   1. Dark Mode
   2. Search History
   3. Weather and Forecast Data
   /weather for current weather.
   /forecast for the 5-day forecast.
```

3.  <h1>Api Reference
   ```bash
   Endpoints Used:
   Current Weather:
   GET https://api.openweathermap.org/data/2.5/weather?q={city}&appid={YOUR_API_KEY}&units=metric
   5-Day Forecast:
   GET https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=${UNITS}

   API Key:
   **You need to sign up at OpenWeatherMap to get an API key.**
   Add the API key to the .env file as VITE_API_KEY.
```
   
  <h1> Rate Limits:
  <h3>The free tier of OpenWeatherMap API allows 60 API calls/minute 1,000,000 calls/month.
  <h3>Current weather API
  <h3></h3>3-hour forecast for 5 days API</h3>


4. <h1>Usage
```bash
Enter a city name in the search bar and press the Enter button or click search icon.
View the current weather and 5-day forecast for the city.
Toggle between Light Mode and Dark Mode using the button in the top-right corner.
Click on a city in the Recent Searches section to quickly search for it again.
```
5. <h1>Future Enhancements
```bash
Implement a caching mechanism for API responses to reduce redundant calls.
Add support for geolocation to fetch weather data for the user's current location.
Seaching city with country code to avoid confusion in cities with same name.
