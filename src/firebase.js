// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEDsnCbb66PLRHG9o6toc4gOwjVMkVVUo",
  authDomain: "blog-19a92.firebaseapp.com",
  projectId: "blog-19a92",
  storageBucket: "blog-19a92.appspot.com",
  messagingSenderId: "747069393540",
  appId: "1:747069393540:web:0c16edbd07a1d306f150d1",
  measurementId: "G-SEPKGRMN6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
