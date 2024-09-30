document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display the data
    const output = document.getElementById('output');
    output.innerHTML = `<h3>Submitted Data:</h3>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Password:</strong> ${password}</p>`;
    
    // Optionally, you can clear the form after submission
    document.getElementById('registrationForm').reset();
});
