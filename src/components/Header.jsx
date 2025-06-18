const Header = ({ darkMode }) => {
  return (
    <div className="text-center mb-12">
      <h1
        className={`text-5xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Contact Us
      </h1>
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-600"
        } text-lg max-w-3xl mx-auto leading-relaxed`}
      >
        Let's connect! We're here to help and we'd love to hear from you.
        Whether you have a question, comment, or just want to chat, you can
        reach out to us through any of the contact methods below.
      </p>

      <div className="flex justify-center items-center gap-4 mt-8">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          <i className="fas fa-clock text-blue-500"></i>
          <span className="text-sm font-medium">24/7 Support</span>
        </div>
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          <i className="fas fa-shield-alt text-green-500"></i>
          <span className="text-sm font-medium">Secure & Private</span>
        </div>
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            darkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
          }`}
        >
          <i className="fas fa-bolt text-yellow-500"></i>
          <span className="text-sm font-medium">Fast Response</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
