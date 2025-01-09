// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { child, getDatabase, get, ref } from "firebase/database";
import constants from "./src/constants";

const firebaseConfig = {
  apiKey: constants.apiKey,
  authDomain: "weddingwebsitereact.firebaseapp.com",
  databaseURL: "https://weddingwebsitereact-default-rtdb.firebaseio.com",
  projectId: "weddingwebsitereact",
  storageBucket: "weddingwebsitereact.appspot.com",
  messagingSenderId: "559812123191",
  appId: "1:559812123191:web:6bd7e66deb7703f260fdb2",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);


console.log("Firebase initialized");

get(child(ref(database), "Test")).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
})


export default firebaseConfig;