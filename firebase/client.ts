// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM3X46K8aIdGrA9FyyJ9Yzy0D58nlVXqs",
  authDomain: "keahi-auto-interview.firebaseapp.com",
  projectId: "keahi-auto-interview",
  storageBucket: "keahi-auto-interview.firebasestorage.app",
  messagingSenderId: "562185255261",
  appId: "1:562185255261:web:02958f1296676214ff10b4",
  measurementId: "G-QJMBGDV1S7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
