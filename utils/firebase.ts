// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCGiypYA1KndMsUkMUdjjz2hPYGQigsLxc",
    authDomain: "clone-930ef.firebaseapp.com",
    projectId: "clone-930ef",
    storageBucket: "clone-930ef.appspot.com",
    messagingSenderId: "186461261689",
    appId: "1:186461261689:web:7d440b3b1612f1c08fe9a8",
};

// Initialize Firebase
if (!getApps.length) {
    const app = initializeApp(firebaseConfig);
} else {
    const app = getApp();
}

export const db = getFirestore();
export const auth = getAuth()
