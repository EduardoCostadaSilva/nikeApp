// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBevquus3VxOiye_nCA4Pbb4zy4N1FXaM",
  authDomain: "nikeapp-93981.firebaseapp.com",
  projectId: "nikeapp-93981",
  storageBucket: "nikeapp-93981.appspot.com",
  messagingSenderId: "640435355157",
  appId: "1:640435355157:web:fd18795403d128a252d81c",
  measurementId: "G-28S62LJXJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);