import { useState } from "react";
import { validateForm } from "../utils/validation";

const ContactForm = ({
  contactMethod,
  onContactMethodChange,
  onSubmit,
  isLoading,
  darkMode,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const contactMethods = [
    {
      id: "chat",
      label: "Support Chat",
      icon: "fas fa-comments",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      id: "call",
      label: "Phone Call",
      icon: "fas fa-phone",
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      id: "email",
      label: "Email Form",
      icon: "fas fa-envelope",
      color: "bg-purple-500 hover:bg-purple-600",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    const fieldErrors = validateForm({ [name]: formData[name] });
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  const handleContactMethodClick = (method) => {
    onContactMethodChange(method);

    // Auto-fill subject based on contact method
    if (method === "chat") {
      setFormData((prev) => ({ ...prev, subject: "Support Chat Request" }));
    } else if (method === "call") {
      setFormData((prev) => ({ ...prev, subject: "Phone Call Request" }));
    }
  };

  const renderInput = (
    name,
    label,
    type = "text",
    placeholder = "",
    required = true
  ) => (
    <div className="space-y-1">
      <label
        className={`block text-sm font-medium ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
          darkMode
            ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
            : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
        } ${errors[name] && touched[name] ? "border-red-500" : ""}`}
      />
      {errors[name] && touched[name] && (
        <p className="text-red-500 text-sm">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div
      className={`${
        darkMode ? "bg-gray-800" : "bg-white"
      } p-8 rounded-xl shadow-lg`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Get in Touch
      </h2>

      {/* Contact Method Selection */}
      <div className="mb-6">
        <label
          className={`block text-sm font-medium mb-3 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Choose Contact Method
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {contactMethods.map((method) => (
            <button
              key={method.id}
              type="button"
              onClick={() => handleContactMethodClick(method.id)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg transition-all duration-200 text-white font-medium text-sm ${
                contactMethod === method.id
                  ? method.color
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <i className={method.icon}></i>
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput("name", "Full Name", "text", "Enter your full name")}
          {renderInput(
            "email",
            "Email Address",
            "email",
            "Enter your email address"
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput(
            "phone",
            "Phone Number",
            "tel",
            "Enter your phone number",
            false
          )}
          {renderInput("subject", "Subject", "text", "What's this about?")}
        </div>

        <div className="space-y-1">
          <label
            className={`block text-sm font-medium ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Tell us how we can help you..."
            required
            rows="5"
            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
              darkMode
                ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                : "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
            } ${errors.message && touched.message ? "border-red-500" : ""}`}
          />
          {errors.message && touched.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <i className="fas fa-shield-alt text-green-500"></i>
            <span
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Your information is secure and private
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 hover:scale-105"
            } text-white shadow-lg`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <i className="fas fa-spinner fa-spin"></i>
                Sending...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <i className="fas fa-paper-plane"></i>
                Send Message
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
