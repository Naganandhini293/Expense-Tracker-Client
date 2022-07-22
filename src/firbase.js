// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFVkY3Q5elnud-4MOj9FnjhJET0Hhok1g",
    authDomain: "expense-tracker-ceba9.firebaseapp.com",
    databaseURL:
        "https://expense-tracker-ceba9-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "expense-tracker-ceba9",
    storageBucket: "expense-tracker-ceba9.appspot.com",
    messagingSenderId: "727054382949",
    appId: "1:727054382949:web:0f9c9358b7643be669d38c",
    measurementId: "G-Z2H3DQ26QW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };
