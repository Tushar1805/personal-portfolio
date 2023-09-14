import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as firebase from "firebase/app";
export const firebaseConfig = {
  apiKey: "AIzaSyDgfOijkb-W4Qi4bem88V307mg1fgfF3cI",
  authDomain: "tusharkalbhande-c84e5.firebaseapp.com",
  databaseURL: "https://tusharkalbhande-c84e5-default-rtdb.firebaseio.com",
  projectId: "tusharkalbhande-c84e5",
  storageBucket: "tusharkalbhande-c84e5.appspot.com",
  messagingSenderId: "998930722516",
  appId: "1:998930722516:web:5989a3c7a68d498f779541",
  measurementId: "G-63KJ8DKZD7",
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
