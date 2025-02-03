// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

// Firebase Config (Replace with your actual Firebase config)
const firebaseConfig = {
    apiKey: "AIzaSyDiLKJaWuas9qlpiS6cYUSbTWtxzOLTxVw",
    authDomain: "e-learning-platform-5c6ca.firebaseapp.com",
    projectId: "e-learning-platform-5c6ca",
    storageBucket: "e-learning-platform-5c6ca.firebasestorage.app",
    messagingSenderId: "654139128820",
    appId: "1:654139128820:web:eaeac6042ab14a8ce817a1"
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