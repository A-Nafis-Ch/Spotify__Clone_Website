// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKoBKteT7slXTmKzsSTZEsNg-Z9nSxQDo",
  authDomain: "spotify-clone-8500b.firebaseapp.com",
  projectId: "spotify-clone-8500b",
  storageBucket: "spotify-clone-8500b.firebasestorage.app",
  messagingSenderId: "398378837495",
  appId: "1:398378837495:web:010603d06168db0cdafaf2",
  measurementId: "G-EQ16XENVJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

// FacebookAuthProvider : https://spotify-clone-8500b.firebaseapp.com/__/auth/handler
// AppleAuthProvider : https://YOUR_FIREBASE_PROJECT_ID.firebaseapp.com/__/auth/handler