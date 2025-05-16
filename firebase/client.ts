// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYWjnb8uch5-QUrBNGy57aSRTDk_IVqDw",
  authDomain: "mahantprep.firebaseapp.com",
  projectId: "mahantprep",
  storageBucket: "mahantprep.firebasestorage.app",
  messagingSenderId: "744286197451",
  appId: "1:744286197451:web:1e660610433aceaaa62d4e",
  measurementId: "G-20495D1KBP"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)