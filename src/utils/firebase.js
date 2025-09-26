// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "netflix-gpt-an.firebaseapp.com",
  projectId: "netflix-gpt-an",
  storageBucket: "netflix-gpt-an.firebasestorage.app",
  messagingSenderId: "472868699567",
  appId: "1:472868699567:web:73d20ac37944d4eee1835a",
  measurementId: "G-TRY7XCGKZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();