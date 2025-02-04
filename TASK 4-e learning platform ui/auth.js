// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Firebase Config (Replace with your actual Firebase config)
const firebaseConfig = {
            apiKey: "YOUR_API_KEY",
            authDomain: "YOUR_AUTH_DOMAIN",
            projectId: "YOUR_PROJECT_ID",
            storageBucket: "YOUR_STORAGE_BUCKET",
            messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
            appId: "YOUR_APP_ID"
        };
  

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  // ✅ Register Function (Exported)
  export function register() {
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
  
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log("User registered:", userCredential.user);
              alert("Registration Successful! Redirecting to login...");
              window.location.href = "auth.html";
          })
          .catch((error) => {
              console.error("Registration error:", error.message);
              document.getElementById("register-error").innerText = error.message;
          });
  }
  
  // ✅ Login Function (Exported)
  export function login() {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;
  
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              console.log("User logged in:", userCredential.user);
              alert("Login Successful! Redirecting to courses...");
              window.location.href = "course.html";
          })
          .catch((error) => {
              console.error("Login error:", error.message);
              document.getElementById("login-error").innerText = error.message;
          });
  }
  
  // ✅ Logout Function (Exported)
  export function logout() {
      signOut(auth).then(() => {
          alert("Logged out successfully.");
          window.location.href = "index.html";
      }).catch((error) => {
          console.error("Logout error:", error.message);
      });
  }
  
  // ✅ Redirect if user is not logged in
  onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed:", user);
      if (!user && window.location.pathname.includes("course.html")) {
          window.location.href = "auth.html";
      }
  });
