// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7v7jc9YMEc8_8OeGy2OLC2eHMqpTeOk0",
    authDomain: "aarksh-systems.firebaseapp.com",
    projectId: "aarksh-systems",
    storageBucket: "aarksh-systems.appspot.com",
    messagingSenderId: "413708009493",
    appId: "1:413708009493:web:98d9cf001effc1684cce1c",
    measurementId: "G-T9CYH1YEPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
const signupEmailInput = document.getElementById('signup-email');
const signupPasswordInput = document.getElementById('signup-password');
const loginEmailInput = document.getElementById('login-email');
const loginPasswordInput = document.getElementById('login-password');
const messageDiv = document.getElementById('message');

// Sign Up Functionality
document.getElementById('signup-button').addEventListener('click', () => {
    const email = signupEmailInput.value;
    const password = signupPasswordInput.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Send email verification
            sendEmailVerification(userCredential.user)
                .then(() => {
                    messageDiv.textContent = "Verification email sent! Please check your inbox.";
                });
        })
        .catch((error) => {
            messageDiv.textContent = `Error: ${error.message}`;
        });
});

// Log In Functionality
document.getElementById('login-button').addEventListener('click', () => {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            messageDiv.textContent = "Thanks for logging in!";
            // Optionally, redirect to another page or perform other actions
        })
        .catch((error) => {
            messageDiv.textContent = `Email or password is incorrect: ${error.message}`;
        });
});
