// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfmFmnhTbN1lloNMMArOBARTZjSaDDYE",
  authDomain: "news-dragon-eb23d.firebaseapp.com",
  projectId: "news-dragon-eb23d",
  storageBucket: "news-dragon-eb23d.appspot.com",
  messagingSenderId: "1042618572653",
  appId: "1:1042618572653:web:962a384f73e7f5ab9f0464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;