# Enhanced Contact Page

A modern, responsive contact page built with React, Vite, and Tailwind CSS. This project features a beautiful UI with dark mode support, form validation, and multiple contact methods.

## ✨ Features

### 🎨 **UI/UX Enhancements**

- **Dark/Light Mode Toggle** - Persistent theme preference with smooth transitions
- **Responsive Design** - Optimized for all device sizes
- **Modern Animations** - Smooth transitions and micro-interactions
- **Professional Layout** - Clean, organized component structure

### 📝 **Form Features**

- **Multiple Contact Methods** - Support Chat, Phone Call, and Email Form
- **Real-time Validation** - Comprehensive form validation with error messages
- **Auto-fill Functionality** - Smart subject line suggestions based on contact method
- **Loading States** - Visual feedback during form submission
- **Success Animation** - Celebratory confetti animation on successful submission

### 🔧 **Technical Improvements**

- **Modular Architecture** - Separated components for better maintainability
- **Custom Hooks** - Reusable dark mode hook with localStorage persistence
- **Form Validation** - Comprehensive validation utility with regex patterns
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- **Performance** - Optimized animations and efficient state management

### 📱 **Contact Information**

- **Company Details** - Address, phone, email, and business hours
- **Social Media Links** - Facebook, Twitter, LinkedIn, Instagram
- **Feature Highlights** - 24/7 support, security, fast response, expert team
- **FAQ Section** - Quick help access

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd content-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ContactForm.jsx      # Main contact form with validation
│   ├── ContactInfo.jsx      # Company information and social links
│   ├── DarkModeToggle.jsx   # Theme toggle component
│   ├── Header.jsx          # Page header with features
│   └── SuccessMessage.jsx   # Success page with animations
├── hooks/
│   └── useDarkMode.js      # Custom dark mode hook
├── utils/
│   └── validation.js       # Form validation utilities
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles and animations
```

## 🎯 Key Components

### ContactForm

- **Contact Method Selection** - Choose between chat, call, or email
- **Form Validation** - Real-time validation with error messages
- **Auto-fill Features** - Smart subject line suggestions
- **Loading States** - Visual feedback during submission

### ContactInfo

- **Company Information** - Address, phone, email, hours
- **Social Media Links** - Interactive social media buttons
- **Feature Highlights** - Why choose us section
- **FAQ Access** - Quick help button

### SuccessMessage

- **Celebration Animation** - Confetti and success feedback
- **Response Information** - Expected response time
- **Action Buttons** - Send another message or go home
- **Quick Contact** - Direct phone and email links

## 🎨 Customization

### Colors and Themes

The project uses Tailwind CSS with a blue color scheme. You can customize colors by modifying the Tailwind config or updating the component classes.

### Contact Information

Update the contact details in `ContactInfo.jsx`:

```javascript
const contactDetails = [
  {
    icon: "fas fa-phone",
    title: "Phone Number",
    content: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  // ... more details
];
```

### Form Validation

Customize validation rules in `utils/validation.js`:

```javascript
export const validateForm = (data) => {
  // Add your custom validation logic
};
```

## 🔧 Technologies Used

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **Local Storage** - Theme persistence

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Tailwind CSS for the utility-first styling
- React team for the amazing framework
- Vite team for the fast build tool

---

**Happy Coding! 🚀**
