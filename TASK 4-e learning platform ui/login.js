// Handle user login
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Redirect to the home or course page upon successful login
            window.location.href = "index.html";
        })
        .catch((error) => {
            errorMessage.textContent = error.message;
        });
});
