// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTeiVswxVuvO9rGnUBt3UmLTHwq97jrNE",
  authDomain: "instagram-dev-b8a70.firebaseapp.com",
  projectId: "instagram-dev-b8a70",
  storageBucket: "instagram-dev-b8a70.appspot.com",
  messagingSenderId: "614314024609",
  appId: "1:614314024609:web:c11d0b6cc2220a72259ae0",
  measurementId: "G-DBMG6LNM3G"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage();

export { app, db, storage };