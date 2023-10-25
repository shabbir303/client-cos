// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4iGtEtcQq_cZvVb9xv3HQYRTGONPbbHM",
  authDomain: "cosmeticbeauty-40dff.firebaseapp.com",
  projectId: "cosmeticbeauty-40dff",
  storageBucket: "cosmeticbeauty-40dff.appspot.com",
  messagingSenderId: "212015716229",
  appId: "1:212015716229:web:14d65a793f5d3dc80e96ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
