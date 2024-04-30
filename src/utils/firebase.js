// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3WHEtzEja4RmW07teAVJWMvR-Mh84sjY",
  authDomain: "netflixgpt-36bec.firebaseapp.com",
  projectId: "netflixgpt-36bec",
  storageBucket: "netflixgpt-36bec.appspot.com",
  messagingSenderId: "897512814336",
  appId: "1:897512814336:web:2e8c082ffe85d3f4b1a5e5",
  measurementId: "G-MP45MXWWKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
