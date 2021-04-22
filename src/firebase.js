import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVl46rjDF4lCPE7ge9VpEZigYggcIkh38",
  authDomain: "clone-264cc.firebaseapp.com",
  databaseURL: "https://clone-264cc.firebaseio.com",
  projectId: "clone-264cc",
  storageBucket: "clone-264cc.appspot.com",
  messagingSenderId: "758324612264",
  appId: "1:758324612264:web:e427aceca74cea9b96069d",
  measurementId: "G-V5KFM99JKB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
