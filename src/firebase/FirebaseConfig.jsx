// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAch8f0beW-qUiKyez1DAjMRh5NuqvsvpA",
  authDomain: "blog-app-d68ff.firebaseapp.com",
  projectId: "blog-app-d68ff",
  storageBucket: "blog-app-d68ff.appspot.com",
  messagingSenderId: "97656582530",
  appId: "1:97656582530:web:64eb4bbd4871a60c5f5f9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage  = getStorage(app);

export {fireDb, auth, storage}