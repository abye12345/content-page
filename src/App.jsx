import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SuccessMessage from "./components/SuccessMessage";
import DarkModeToggle from "./components/DarkModeToggle";
import Header from "./components/Header";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const [contactMethod, setContactMethod] = useState("email");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleSubmit = async (formData) => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleContactMethodChange = (method) => {
    setContactMethod(method);
  };

  if (isSubmitted) {
    return (
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
        <SuccessMessage
          darkMode={darkMode}
          onReset={() => setIsSubmitted(false)}
        />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      <DarkModeToggle darkMode={darkMode} onToggle={toggleDarkMode} />

      <div className="container mx-auto px-4 py-8">
        <Header darkMode={darkMode} />

        <div className="flex flex-col lg:flex-row gap-8 items-start mt-12">
          <div className="w-full lg:w-1/2">
            <ContactForm
              contactMethod={contactMethod}
              onContactMethodChange={handleContactMethodChange}
              onSubmit={handleSubmit}
              isLoading={isLoading}
              darkMode={darkMode}
            />
          </div>

          <div className="w-full lg:w-1/2">
            <ContactInfo darkMode={darkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
