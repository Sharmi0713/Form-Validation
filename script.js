function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const error = document.getElementById("error");
    error.textContent = "";
  
    // Name validation
    if (name.length < 5) {
      error.textContent = "Name must be at least 5 characters long.";
      return false;
    }
  
    // Email validation
    if (!email.includes("@")) {
      error.textContent = "Enter a valid email address.";
      return false;
    }
  
    // Phone number validation
    if (phone.length !== 10 || isNaN(phone) || phone === "123456789") {
      error.textContent = "Phone number must be 10 digits and not 123456789.";
      return false;
    }
  
    // Password validation
    if (
      password.toLowerCase() === "password" ||
      password.toLowerCase() === name.toLowerCase() ||
      password.length < 8
    ) {
      error.textContent = "Password is not strong.";
      return false;
    }
  
    // Confirm password match
    if (password !== confirmPassword) {
      error.textContent = "Passwords do not match.";
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  