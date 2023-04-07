// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPiQKPERrHqkhkylaKEjIXdJxbFdaqSNE",
  authDomain: "kfcwebsite-8e758.firebaseapp.com",
  projectId: "kfcwebsite-8e758",
  storageBucket: "kfcwebsite-8e758.appspot.com",
  messagingSenderId: "793862283616",
  appId: "1:793862283616:web:76d09fa8e8ae0099277e05",
  measurementId: "G-ET73YXJDGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);