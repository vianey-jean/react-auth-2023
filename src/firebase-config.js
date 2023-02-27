import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCo6DNv9HiayjswPhH614QMLgBjhsKYLic",
  authDomain: "react-firebase-auth-v2601.firebaseapp.com",
  projectId: "react-firebase-auth-v2601",
  storageBucket: "react-firebase-auth-v2601.appspot.com",
  messagingSenderId: "449712738588",
  appId: "1:449712738588:web:44e08319bea9af8abfaad9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);