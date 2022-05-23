// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJcjk94r3pa0ARX5E1UbS6SBtCMiTJmeA",
  authDomain: "gear-bikes-816f2.firebaseapp.com",
  projectId: "gear-bikes-816f2",
  storageBucket: "gear-bikes-816f2.appspot.com",
  messagingSenderId: "689658491856",
  appId: "1:689658491856:web:8aaa7e97ee1a04cf5f3fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;