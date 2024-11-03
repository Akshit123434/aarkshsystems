// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
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

// Sign Up function
document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(user).then(() => {
                document.getElementById('message').textContent = 'Sign Up Successful! Please check your email for confirmation.';
            });
        })
        .catch((error) => {
            document.getElementById('message').textContent = error.message;
        });
});

// Log In function
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById('message').textContent = 'Thanks for logging in!';
        })
        .catch((error) => {
            document.getElementById('message').textContent = 'Email or password incorrect.';
        });
});
