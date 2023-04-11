import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "melthify.firebaseapp.com",
    projectId: "melthify",
    storageBucket: "melthify.appspot.com",
    messagingSenderId: "135963287106",
    appId: process.env.REACT_APP_FIREBASE_APIKEY,
    measurementId: "G-0JFXDRY1NM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
