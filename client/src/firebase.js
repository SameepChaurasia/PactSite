// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pact-site-702d3.firebaseapp.com",
  projectId: "pact-site-702d3",
  storageBucket: "pact-site-702d3.firebasestorage.app",
  messagingSenderId: "583643623836",
  appId: "1:583643623836:web:9f2dd19a341706ff539859"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);