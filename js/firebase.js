// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5H2kuLhe296lu-qnlVlT_UGsREXHQoNU",
  authDomain: "thietkewebkfc.firebaseapp.com",
  databaseURL: "https://thietkewebkfc-default-rtdb.firebaseio.com",
  projectId: "thietkewebkfc",
  storageBucket: "thietkewebkfc.appspot.com",
  messagingSenderId: "1060620707906",
  appId: "1:1060620707906:web:9050bcc4580cdf3d7925db",
  measurementId: "G-RQSJDE5VTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);