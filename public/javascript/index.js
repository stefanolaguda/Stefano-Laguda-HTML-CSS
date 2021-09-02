// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVx1p5n5sZILxA4nwA5KkfBDMqJikGrTY",
  authDomain: "portfolio-940f1.firebaseapp.com",
  projectId: "portfolio-940f1",
  storageBucket: "portfolio-940f1.appspot.com",
  messagingSenderId: "486879235305",
  appId: "1:486879235305:web:1ee35d0c1e911d0d6b3478",
  measurementId: "G-XMJ0FRD0K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

