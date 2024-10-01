function validateForm() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    // Regex patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    const phonePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;

    // Clear previous error message
    errorMessage.classList.add('hidden');

    // Validate fields are not empty and do not contain only spaces
    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        errorMessage.textContent = "All fields must be filled out!";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Validate phone number (numeric and 10 digits)
    if (!phonePattern.test(phone)) {
        errorMessage.textContent = "Phone number must be 10 digits long and only contain numbers.";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Please enter a valid email address (e.g. example@example.com).";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Validate password (at least 7 characters, 1 capital letter, 1 digit, 1 special character)
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must be at least 7 characters long and contain at least one uppercase letter, one digit, and one special character (&,$,#,@).";
        errorMessage.classList.remove('hidden');
        return false;
    }

    // Validate confirm password (matches password)
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.classList.remove('hidden');
        return false;
    }

    alert("Form Submitted Successfully!");
    return true; // Allow form submission
}
