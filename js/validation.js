/* ==========================================
   NorthPeak Digital - Contact Form Validation
   Client-side validation with full ARIA accessibility
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const successBanner = document.getElementById('form-success-banner');

  if (!contactForm) return;

  // Validation rules
  const validators = {
    fullName: (value) => {
      if (!value.trim()) return 'Please enter your full name.';
      if (value.trim().length < 2) return 'Name must be at least 2 characters.';
      return '';
    },
    email: (value) => {
      if (!value.trim()) return 'Please enter your email address.';
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
      return '';
    },
    service: (value) => {
      if (!value || value === '') return 'Please select a service.';
      return '';
    },
    message: (value) => {
      if (!value.trim()) return 'Please enter your project message.';
      if (value.trim().length < 10) return 'Message should be at least 10 characters long.';
      return '';
    }
  };

  // Helper to clear error
  const clearError = (field) => {
    field.classList.remove('is-invalid');
    field.setAttribute('aria-invalid', 'false');
    const errorElem = document.getElementById(`${field.id}-error`);
    if (errorElem) {
      errorElem.textContent = '';
      errorElem.style.display = 'none';
    }
  };

  // Helper to show error
  const showError = (field, message) => {
    field.classList.add('is-invalid');
    field.setAttribute('aria-invalid', 'true');
    const errorElem = document.getElementById(`${field.id}-error`);
    if (errorElem) {
      errorElem.textContent = message;
      errorElem.style.display = 'block';
    }
  };

  // Attach live input listeners
  const formFields = ['fullName', 'email', 'service', 'message'];
  formFields.forEach((fieldName) => {
    const field = document.getElementById(fieldName);
    if (!field) return;

    field.addEventListener('input', () => {
      const errorMsg = validators[fieldName](field.value);
      if (!errorMsg) {
        clearError(field);
      }
    });

    field.addEventListener('blur', () => {
      const errorMsg = validators[fieldName](field.value);
      if (errorMsg) {
        showError(field, errorMsg);
      } else {
        clearError(field);
      }
    });
  });

  // Handle Form Submit
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isFormValid = true;
    let firstInvalidField = null;

    formFields.forEach((fieldName) => {
      const field = document.getElementById(fieldName);
      if (!field) return;

      const errorMsg = validators[fieldName](field.value);
      if (errorMsg) {
        showError(field, errorMsg);
        isFormValid = false;
        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      } else {
        clearError(field);
      }
    });

    if (!isFormValid) {
      if (firstInvalidField) {
        firstInvalidField.focus();
      }
      return;
    }

    // Success State
    if (successBanner) {
      successBanner.style.display = 'block';
      successBanner.focus();
    }

    contactForm.reset();

    // Hide success banner after 6 seconds
    setTimeout(() => {
      if (successBanner) {
        successBanner.style.display = 'none';
      }
    }, 6000);
  });
});
