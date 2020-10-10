import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// db

const config = {
  apiKey: "AIzaSyA5O8jTDv8xSTcXfauZQia0z3chVLCeAJk",
  authDomain: "netflix-clone-e93a3.firebaseapp.com",
  databaseURL: "https://netflix-clone-e93a3.firebaseio.com",
  projectId: "netflix-clone-e93a3",
  storageBucket: "netflix-clone-e93a3.appspot.com",
  messagingSenderId: "383349328367",
  appId: "1:383349328367:web:9830af57bcfc5c1f52ce1a",
  measurementId: "G-X6RG6BJYSS",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
