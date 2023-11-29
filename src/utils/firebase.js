// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVa9El3uB2d38P9KLzwCCv5oO7puY9qco",
  authDomain: "netflixgpt-83d15.firebaseapp.com",
  projectId: "netflixgpt-83d15",
  storageBucket: "netflixgpt-83d15.appspot.com",
  messagingSenderId: "815913451013",
  appId: "1:815913451013:web:fc1860b0dc807a8e24266c",
  measurementId: "G-SVBN4XQZBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);