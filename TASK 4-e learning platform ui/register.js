// Handle user registration
const registerForm = document.getElementById("register-form");
const errorMessage = document.getElementById("error-message");

registerForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to login page after successful registration
            window.location.href = "login.html";
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});
