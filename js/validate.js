window.onload = function() {
    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var guests = document.getElementById('guests').value;
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;

        // Regular expressions for validation
        var phoneRegex = /^[0-9]{10}$/; // Simple phone number regex (10 digits)
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

        // Validate phone number
        if (!phone.match(phoneRegex)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        // Validate email
        if (!email.match(emailRegex)) {
            alert('Please enter a valid email address.');
            return false;
        }

        // If all validations pass, you can proceed with form submission or any other action
        // For now, I'm just showing an alert indicating successful validation
        alert('Form submitted successfully!');
    });
};