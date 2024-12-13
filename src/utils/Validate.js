const Validate = (email, password) => {
    // Validation messages
    let emailError = '';
    let passwordError = '';
  
    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Password validation regex: at least 4 digits and allows letters and digits
    const passwordRegex = /^(?=(.*\d.*){4})[A-Za-z\d]{4,}$/;

    // Email validation
    if (!email) {
      emailError = 'Email is required.';
    } else if (!emailRegex.test(email)) {
      emailError = 'Please enter a valid email address.';
    }
  
    // Password validation
    if (!password) {
      passwordError = 'Password is required.';
    } else if (!passwordRegex.test(password)) {
      // Update the error message based on your simplified password requirement
      passwordError = 'Password must contain at least 4 digits and can include letters.';
    }
  
    // Return validation results
    return {
      emailError,
      passwordError,
      isValid: !emailError && !passwordError, // Form is valid if there are no errors
    };
};
  
export default Validate;
