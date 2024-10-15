document.getElementById("profile-form").onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    let formData = new FormData(document.getElementById("profile-form"));

    // Fetch request to send form data to PHP
    fetch('profile.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) // Expect JSON response
    .then(result => {
        if (result.success) {
            // Redirect to portfolio.php if the profile was saved successfully
            window.location.href = 'portfolio.php';
        } else {
            // Display the error message in the page
            document.getElementById("message").textContent = "Error: " + result.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("message").textContent = "Error: " + error.message;
    });
};
