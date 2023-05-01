import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAxhn-AausKOgBbIcJ1R59EUMHSaF51mPw",
  authDomain: "mynotes-f2239.firebaseapp.com",
  projectId: "mynotes-f2239",
  storageBucket: "mynotes-f2239.appspot.com",
  messagingSenderId: "276452569078",
  appId: "1:276452569078:web:3baf1aab029de589b9a1d7",
  measurementId: "G-DDW1VYG6TK"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = getFirestore();
const auth = getAuth(app);
export { app, firestore, db, auth };
