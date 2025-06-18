import { useEffect, useState } from "react";

const SuccessMessage = ({ darkMode, onReset }) => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const confettiEmojis = [
    "🎉",
    "✨",
    "🚀",
    "💫",
    "🌟",
    "🎊",
    "🎈",
    "🎯",
    "🏆",
    "⭐",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, index) => (
            <span
              key={index}
              className="emoji-confetti absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {
                confettiEmojis[
                  Math.floor(Math.random() * confettiEmojis.length)
                ]
              }
            </span>
          ))}
        </div>
      )}

      {/* Success Content */}
      <div className="text-center z-10 relative">
        <div
          className={`${
            darkMode ? "bg-gray-800" : "bg-white"
          } p-12 rounded-2xl shadow-2xl max-w-md mx-4`}
        >
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-check-circle text-4xl text-green-500"></i>
            </div>
          </div>

          {/* Success Message */}
          <h1
            className={`text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Message Sent Successfully!
          </h1>

          <p
            className={`text-lg mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thank you for reaching out to us. We've received your message and
            will get back to you as soon as possible.
          </p>

          {/* Additional Info */}
          <div
            className={`p-4 rounded-lg mb-6 ${
              darkMode ? "bg-gray-700" : "bg-blue-50"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-clock text-blue-500"></i>
              <span
                className={`font-medium ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Response Time
              </span>
            </div>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              We typically respond within 2-4 hours during business hours.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onReset}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Send Another Message
            </button>

            <button
              onClick={() => (window.location.href = "/")}
              className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              Back to Home
            </button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Need immediate assistance?
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="tel:+15551234567"
                className={`flex items-center gap-1 text-sm font-medium ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <i className="fas fa-phone"></i>
                Call Us
              </a>
              <a
                href="mailto:hello@company.com"
                className={`flex items-center gap-1 text-sm font-medium ${
                  darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                <i className="fas fa-envelope"></i>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
