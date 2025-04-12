// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpkdt174LXlnQ70jrZp56n5dvpn-6BmDE",
    authDomain: "estetica-app-54e85.firebaseapp.com",
    projectId: "estetica-app-54e85",
    storageBucket: "estetica-app-54e85.firebasestorage.app",
    messagingSenderId: "903570789435",
    appId: "1:903570789435:web:a361222c1d1e822277f81e",
    measurementId: "G-EK2FPQ8FYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// AUTH
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
