const ContactInfo = ({ darkMode }) => {
  const contactDetails = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Our Location",
      content: "123 Business Street, Suite 100, City, State 12345",
      color: "text-blue-500",
    },
    {
      icon: "fas fa-phone",
      title: "Phone Number",
      content: "+1 (555) 123-4567",
      color: "text-green-500",
      action: "tel:+15551234567",
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      content: "hello@company.com",
      color: "text-purple-500",
      action: "mailto:hello@company.com",
    },
    {
      icon: "fas fa-clock",
      title: "Business Hours",
      content: "Mon - Fri: 9:00 AM - 6:00 PM",
      color: "text-orange-500",
    },
  ];

  const socialLinks = [
    {
      icon: "fab fa-facebook",
      label: "Facebook",
      url: "#",
      color: "text-blue-600",
    },
    {
      icon: "fab fa-twitter",
      label: "Twitter",
      url: "#",
      color: "text-blue-400",
    },
    {
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      url: "#",
      color: "text-blue-700",
    },
    {
      icon: "fab fa-instagram",
      label: "Instagram",
      url: "#",
      color: "text-pink-500",
    },
  ];

  const features = [
    {
      icon: "fas fa-headset",
      title: "24/7 Support",
      description: "Round-the-clock customer support available",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure & Private",
      description: "Your information is protected and confidential",
    },
    {
      icon: "fas fa-bolt",
      title: "Fast Response",
      description: "We typically respond within 2 hours",
    },
    {
      icon: "fas fa-users",
      title: "Expert Team",
      description: "Experienced professionals ready to help",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Company Image */}
      <div className="relative overflow-hidden rounded-xl shadow-lg">
        <img
          src="./src/service-logo.jpg"
          alt="Customer service team"
          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">Professional Support Team</h3>
          <p className="text-sm opacity-90">Ready to help you succeed</p>
        </div>
      </div>

      {/* Contact Details */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-xl shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`${detail.color} text-lg mt-1`}>
                <i className={detail.icon}></i>
              </div>
              <div className="flex-1">
                <h4
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {detail.title}
                </h4>
                {detail.action ? (
                  <a
                    href={detail.action}
                    className={`text-sm hover:underline ${
                      darkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {detail.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-xl shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Why Choose Us
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-blue-500 text-lg mt-1">
                <i className={feature.icon}></i>
              </div>
              <div>
                <h4
                  className={`font-medium text-sm ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {feature.title}
                </h4>
                <p
                  className={`text-xs ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-xl shadow-lg`}
      >
        <h3
          className={`text-xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Follow Us
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              aria-label={social.label}
            >
              <i className={`${social.icon} ${social.color} text-xl`}></i>
            </a>
          ))}
        </div>
      </div>

      {/* FAQ Link */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-6 rounded-xl shadow-lg`}
      >
        <div className="text-center">
          <i className="fas fa-question-circle text-4xl text-blue-500 mb-3"></i>
          <h3
            className={`text-lg font-bold mb-2 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Need Quick Help?
          </h3>
          <p
            className={`text-sm mb-4 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Check out our frequently asked questions
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
