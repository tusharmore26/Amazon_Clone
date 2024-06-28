// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVUKkmOwXecNT3873uCdEjcbbSGgGK7Lo",
  authDomain: "clon-624da.firebaseapp.com",
  projectId: "clon-624da",
  storageBucket: "clon-624da.appspot.com",
  messagingSenderId: "778502757024",
  appId: "1:778502757024:web:619fb51cbaf2c4738647c5",
  measurementId: "G-6BSXDRSPE4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig