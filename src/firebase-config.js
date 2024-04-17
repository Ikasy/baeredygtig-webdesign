// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXZ_U9proQ8bwSNZAMKRVYu_RXKbRhNFs",
    authDomain: "baeredygtig-webdesign.firebaseapp.com",
    databaseURL: "https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "baeredygtig-webdesign",
    storageBucket: "baeredygtig-webdesign.appspot.com",
    messagingSenderId: "534906087325",
    appId: "1:534906087325:web:0380c6dde4786bce5bf174"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);