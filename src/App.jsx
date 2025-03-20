import { useState, useEffect } from "react";

export default function App() {
  const [send, Setsend] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const DarkModeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 p-2 rounded-full ${
        darkMode
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-gray-200 hover:bg-gray-300"
      } transition-colors z-10`}
    >
      {darkMode ? (
        <i className="fas fa-sun text-white text-xl"></i>
      ) : (
        <i className="fas fa-moon text-gray-800 text-xl"></i>
      )}
    </button>
  );

  if (send) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <DarkModeToggle />
        <div className="relative h-64 w-full text-center">
          {[...Array(50)].map((_, index) => (
            <span
              key={index}
              className="emoji-explosion absolute text-2xl"
              style={{
                left: "50%",
                top: "50%",
                "--dx": `${
                  Math.cos(Math.random() * 2 * Math.PI) *
                  (100 + Math.random() * 100)
                }px`,
                "--dy": `${
                  Math.sin(Math.random() * 2 * Math.PI) *
                  (100 + Math.random() * 100)
                }px`,
              }}
            >
              {["🎉", "✨", "🚀"][Math.floor(Math.random() * 3)]}
            </span>
          ))}
          <h1
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-4 animate-scale-in`}
          >
            🎉 The message successfully sent!
          </h1>
        </div>
      </div>
    );
  }

  function onSubmit(e) {
    e.preventDefault();
    Setsend(true);
  }

  return (
    <div
      className={`min-h-screen p-8 flex justify-center items-center ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <DarkModeToggle />
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl font-bold ${
              darkMode ? "text-white" : "text-gray-800"
            } mb-4`}
          >
            CONTACT US
          </h1>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-600"
            } text-lg max-w-2xl mx-auto leading-relaxed`}
          >
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div
            className={`max-w-md w-full ${
              darkMode ? "bg-gray-800" : "bg-white"
            } p-8 rounded-xl shadow-lg`}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex-1 text-sm font-medium"
                >
                  <i className="fas fa-comment-dots text-lg mr-2"></i>
                  VIA SUPPORT CHAT
                </button>
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex-1 text-sm font-medium"
                >
                  <i className="fas fa-phone mr-2"></i>
                  VIA CALL
                </button>
              </div>

              <div>
                <button
                  type="button"
                  className={`w-full ${
                    darkMode
                      ? "bg-gray-700 text-gray-100"
                      : "bg-gray-100 text-gray-800"
                  } px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors border-2 ${
                    darkMode ? "border-gray-600" : "border-gray-200"
                  } text-sm font-medium`}
                >
                  VIA EMAIL FORM
                </button>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  className={`w-full p-3 border ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400`}
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  className={`w-full p-3 border ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400`}
                  placeholder="Email"
                  required
                />
                <textarea
                  className={`w-full p-3 border ${
                    darkMode
                      ? "border-gray-600 bg-gray-700 text-white"
                      : "border-gray-300"
                  } rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400`}
                  placeholder="Message"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>

          <div className="flex-1 max-w-xl">
            <img
              src="./src/service-logo.jpg"
              alt="Customer service"
              className="w-full h-full rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
