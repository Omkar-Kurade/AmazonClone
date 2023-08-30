import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPqsFxBmQdM7waoXBgnDrgADh6nPyHBlo",
  authDomain: "clone-7acfb.firebaseapp.com",
  projectId: "clone-7acfb",
  storageBucket: "clone-7acfb.appspot.com",
  messagingSenderId: "827038525213",
  appId: "1:827038525213:web:a1c876e04d1e25307023f4",
  measurementId: "G-QC37QLR8M2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
