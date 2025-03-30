# Weather App 🌦️

A responsive weather application built with **React** and **Vite** that allows users to search for current weather and a 5-day forecast for any city. The app includes features like dark mode, search history, and a user-friendly interface.

---

## Features

- 🌤 **Current Weather**: Displays real-time weather data for the searched city.
- 📅 **5-Day Forecast**: Provides a 5-day weather forecast with key details.
- 🌙 **Dark Mode**: Toggle between light and dark themes for better user experience.
- 🕒 **Search History**: Keeps track of the last 5 searched cities for quick access.
- ⚡ **Responsive Design**: Fully responsive and optimized for all devices.
- 🔄 **Refresh Weather**: Refresh the weather data for the current city.

---

## Demo
![image](https://github.com/user-attachments/assets/35635b40-40c9-4568-8356-c0968e452f05)
![image](https://github.com/user-attachments/assets/10296ded-670f-4368-9289-dbd2a8acb352)


---

## Tech Stack

- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **API**: OpenWeatherMap API
- **State Management**: React Hooks (`useState`, `useEffect`, `useCallback`)

---

## Installation

1. Clone the repository:
   ```bash
   https://github.com/harishgarg2508/zynetic.git
   cd zynetic
   npm install
   npm run dev
   https://localhost:5173
```bash
Project Structure
src/
├── components/
│   ├── ForecastCard.jsx       # Displays the 5-day weather forecast 
│   ├── SearchHistory.jsx      # Displays the recent search history
│   ├── WeatherCard.jsx        # Displays the current weather details
├── [App.jsx]                  # Main application component
├── index.css                  # Global styles
└── main.jsx                   # Entry point for the React app


Key Functionalities
1. Dark Mode
2. Search History
3. Weather and Forecast Data
/weather for current weather.
/forecast for the 5-day forecast.
