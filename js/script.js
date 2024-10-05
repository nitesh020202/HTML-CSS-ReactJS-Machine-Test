document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (errorElement) {
        errorElement.textContent = '';
    });

    // Get values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate inputs
    let isValid = true;

    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First Name is required.';
        isValid = false;
    }

    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last Name is required.';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email.';
        isValid = false;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Log the data if valid
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };
        console.log(formData);
        alert('Registration successful!');
    }
});
