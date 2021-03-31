
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwh4PxitUOODXgK_JuXRDSGWxvFvg6taM",
  authDomain: "clone-d9603.firebaseapp.com",
  projectId: "clone-d9603",
  storageBucket: "clone-d9603.appspot.com",
  messagingSenderId: "1023504600924",
  appId: "1:1023504600924:web:60ca0521b2a866086e3b99",
  measurementId: "G-431Y474QHP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
