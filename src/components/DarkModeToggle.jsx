const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed top-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 ${
        darkMode
          ? "bg-gray-700 hover:bg-gray-600 text-yellow-400"
          : "bg-white hover:bg-gray-100 text-gray-800 border border-gray-200"
      }`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <i className="fas fa-sun text-xl"></i>
      ) : (
        <i className="fas fa-moon text-xl"></i>
      )}
    </button>
  );
};

export default DarkModeToggle;
