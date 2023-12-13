// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlAdx9fOAUy9w-I_nOzRLk3GFuR_nQhoQ",
  authDomain: "favv-665d0.firebaseapp.com",
  projectId: "favv-665d0",
  storageBucket: "favv-665d0.appspot.com",
  messagingSenderId: "38307809942",
  appId: "1:38307809942:web:096cf9b3cbdabddd6e90b7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)