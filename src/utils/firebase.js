// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmjha1ICDQmSCa0U1cKVmUwTAI8l-wjlo",
  authDomain: "netflixgpt-b4f2e-800fb.firebaseapp.com",
  projectId: "netflixgpt-b4f2e",
  storageBucket: "netflixgpt-b4f2e.appspot.com",
  messagingSenderId: "833120930372",
  appId: "1:833120930372:web:b3e29a0cffc97653744a11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
