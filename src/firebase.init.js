// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALc18hGTZBAJfxkS_CYF2nj0RO3Jxxs4k",
    authDomain: "assignment-10-49dc3.firebaseapp.com",
    projectId: "assignment-10-49dc3",
    storageBucket: "assignment-10-49dc3.appspot.com",
    messagingSenderId: "367883055426",
    appId: "1:367883055426:web:c0c8bfc70e4685b7c9d8db",
    measurementId: "G-8538W7YZJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth 