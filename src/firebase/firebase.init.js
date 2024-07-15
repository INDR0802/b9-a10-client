// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuSKY6IaznSrBKaReQchcBVv22reekrIo",
    authDomain: "b9-a10-6d1b6.firebaseapp.com",
    projectId: "b9-a10-6d1b6",
    storageBucket: "b9-a10-6d1b6.appspot.com",
    messagingSenderId: "738513897334",
    appId: "1:738513897334:web:418c4463fbe3492ed75c57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;