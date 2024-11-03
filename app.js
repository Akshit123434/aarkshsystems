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

// Get elements
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupButton = document.getElementById("signup-button");

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");

const messageDiv = document.getElementById("message");

// Sign Up
signupButton.addEventListener("click", async () => {
    const email = signupEmail.value;
    const password = signupPassword.value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await sendEmailVerification(userCredential.user);
        messageDiv.textContent = "Verification email sent. Please check your email.";
    } catch (error) {
        messageDiv.textContent = error.message;
    }
});

// Login
loginButton.addEventListener("click", async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (userCredential.user.emailVerified) {
            messageDiv.textContent = "Thanks for logging in!";
        } else {
            messageDiv.textContent = "Please verify your email before logging in.";
        }
    } catch (error) {
        messageDiv.textContent = "Email or password incorrect.";
    }
});
