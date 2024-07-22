import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6WbkeSsOJF8DdrlMP1qhTFtoIlcYmM8k",
  authDomain: "hovorinvoice.firebaseapp.com",
  projectId: "hovorinvoice",
  storageBucket: "hovorinvoice.appspot.com",
  messagingSenderId: "316138516503",
  appId: "1:316138516503:web:6c2029afba796ea045ac52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); 
export const provider = new GoogleAuthProvider(); 
export default app;