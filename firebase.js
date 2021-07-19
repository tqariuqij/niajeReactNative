import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT5hWTRkj-xw2gC4tZyFeXSN6SPD4PmG0",
  authDomain: "niaje-35982.firebaseapp.com",
  projectId: "niaje-35982",
  storageBucket: "niaje-35982.appspot.com",
  messagingSenderId: "588940919765",
  appId: "1:588940919765:web:b753d0a32c06a8fe85735c",
  measurementId: "G-49GDF03HT4",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
