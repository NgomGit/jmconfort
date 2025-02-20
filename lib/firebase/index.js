// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK npm install -g firebase-toolsv7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0KcEBcYliILJcnoxmrpPLtrlkuQS-boI",
  authDomain: "jmconfort-446cc.firebaseapp.com",
  projectId: "jmconfort-446cc",
  storageBucket: "jmconfort-446cc.firebasestorage.app",
  messagingSenderId: "56840951717",
  appId: "1:56840951717:web:3fa51e482e20ea6a727a4c",
  measurementId: "G-TL3HV37NSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
// const analytics = getAnalytics(app);