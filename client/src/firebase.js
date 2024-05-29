// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-e2d2a.firebaseapp.com",
  projectId: "mern-state-e2d2a",
  storageBucket: "mern-state-e2d2a.appspot.com",
  messagingSenderId: "828064565563",
  appId: "1:828064565563:web:4f8bb82131e79a28b54f1e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);