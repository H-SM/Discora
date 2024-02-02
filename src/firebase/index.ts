// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyvX6qgH7SAPt0NSch3mu_CSm-sl3rSd8",
  authDomain: "discora-ceadd.firebaseapp.com",
  projectId: "discora-ceadd",
  storageBucket: "discora-ceadd.appspot.com",
  messagingSenderId: "1023430328315",
  appId: "1:1023430328315:web:ad56692e3b5a1aa0c2955e",
  measurementId: "G-7H52FBGGE5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth  