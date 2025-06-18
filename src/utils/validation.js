export const validateForm = (data) => {
  const errors = {};

  // Name validation
  if (data.name !== undefined) {
    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters long";
    } else if (!/^[a-zA-Z\s]+$/.test(data.name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }
  }

  // Email validation
  if (data.email !== undefined) {
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
  }

  // Phone validation (optional field)
  if (data.phone !== undefined && data.phone.trim()) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(data.phone.replace(/[\s\-\(\)]/g, ""))) {
      errors.phone = "Please enter a valid phone number";
    }
  }

  // Subject validation
  if (data.subject !== undefined) {
    if (!data.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (data.subject.trim().length < 5) {
      errors.subject = "Subject must be at least 5 characters long";
    }
  }

  // Message validation
  if (data.message !== undefined) {
    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    } else if (data.message.trim().length > 1000) {
      errors.message = "Message must be less than 1000 characters";
    }
  }

  return errors;
};

export const validateField = (name, value) => {
  const fieldData = { [name]: value };
  const errors = validateForm(fieldData);
  return errors[name] || "";
};
