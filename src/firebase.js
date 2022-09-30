// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCDWftD362oWfdkqgvCS96AU5vPQ4Zk3U",
  authDomain: "clone-45b0b.firebaseapp.com",
  projectId: "clone-45b0b",
  storageBucket: "clone-45b0b.appspot.com",
  messagingSenderId: "1084264807412",
  appId: "1:1084264807412:web:05f7cbaf80bb53739717a1",
  measurementId: "G-L6QXFPLX00",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
