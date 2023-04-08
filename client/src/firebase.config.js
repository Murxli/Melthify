import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDMvMsJnXyKID0Q2lQOTvmkgyxMqxV71Zg",
    authDomain: "melthify.firebaseapp.com",
    projectId: "melthify",
    storageBucket: "melthify.appspot.com",
    messagingSenderId: "135963287106",
    appId: "1:135963287106:web:aeb9cb67f792b0e14497db",
    measurementId: "G-0JFXDRY1NM"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);