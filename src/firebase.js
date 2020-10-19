// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: '${process.env.FIREBASE_KEY}',
  authDomain: "clone-3ea96.firebaseapp.com",
  databaseURL: "https://clone-3ea96.firebaseio.com",
  projectId: "clone-3ea96",
  storageBucket: "clone-3ea96.appspot.com",
  messagingSenderId: "1030445594136",
  appId: "1:1030445594136:web:b203c790b59384dc13f56d",
  measurementId: "G-B8NSDQYF3T",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
  