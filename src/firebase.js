import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "myproject-608c4.firebaseapp.com",
  projectId: "myproject-608c4",
  storageBucket: "myproject-608c4.appspot.com",
  messagingSenderId: "620202618466",
  appId: "1:620202618466:web:ae209dd7778880c2b26b3b",
  measurementId: "G-9TXC87DC7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
export const auth = getAuth();