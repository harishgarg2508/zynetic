const SearchHistory = ({ history, onCitySelect, darkMode }) => {
    return (
      <div className="mt-6 max-w-md mx-auto">
        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Recent Searches</h3>
        <div className="flex flex-wrap gap-2">
          {history.map((city, index) => (
            <button
              key={`${city}-${index}`}
              onClick={() => onCitySelect(city)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                darkMode 
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default SearchHistory;