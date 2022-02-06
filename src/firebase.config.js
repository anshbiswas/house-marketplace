// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG-igt7PDYXmnjPRTSWiXJpbyczp26K3k",
  authDomain: "house-marketplace-app-8f1dd.firebaseapp.com",
  projectId: "house-marketplace-app-8f1dd",
  storageBucket: "house-marketplace-app-8f1dd.appspot.com",
  messagingSenderId: "659704287441",
  appId: "1:659704287441:web:3005901b439a3bd016f5f0"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()