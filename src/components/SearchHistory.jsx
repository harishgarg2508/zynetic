const SearchHistory = ({ history, onCitySelect, theme }) => {
  if (!history.length) return null;

  return (
    <div className="mt-6 max-w-md mx-auto">
      <h3 className={`text-lg font-semibold mb-2 text-gray-700 ${theme}`}>Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((city, index) => (
          <button
            key={city + index}
            onClick={() => onCitySelect(city)}
            title={`Search for ${city}`}
            aria-label={`Search for ${city}`}
            className="px-3 py-1 contrast-200 rounded-full text-sm cursor-pointer transition-all transform bg-gray-200 text-gray-800 hover:bg-gray-300 active:scale-95 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
