import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import { firebase } from "./lib/firebase.prod";
import { FirebaseContext } from "./firebase/Firebase";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
