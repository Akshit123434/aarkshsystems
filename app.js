// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

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

// Sign up function
document.getElementById('signup-button').addEventListener('click', () => {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Send verification email
            sendEmailVerification(userCredential.user)
                .then(() => {
                    alert('Verification email sent! Please check your inbox.');
                    document.getElementById('message').innerText = 'Check your email for verification.';
                });
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(error.message);
            document.getElementById('message').innerText = error.message;
        });
});

// Login function
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successful login
            document.getElementById('message').innerText = 'Thanks for logging in!';
        })
        .catch((error) => {
            console.error('Error logging in:', error);
            alert('Email or password incorrect');
            document.getElementById('message').innerText = 'Email or password incorrect';
        });
});
