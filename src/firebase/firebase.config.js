// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcxiFl5epilgJk0-ryfbT2gqpeVG1mzxI",
  authDomain: "travel-ease-20f6a.firebaseapp.com",
  projectId: "travel-ease-20f6a",
  storageBucket: "travel-ease-20f6a.firebasestorage.app",
  messagingSenderId: "366490587665",
  appId: "1:366490587665:web:21773c775053819d25d7b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);