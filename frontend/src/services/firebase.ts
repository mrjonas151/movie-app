import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0RCPprU_ELW9i5iThRxAhSr49VJrjQbw",
  authDomain: "challenge2-2357a.firebaseapp.com",
  projectId: "challenge2-2357a",
  storageBucket: "challenge2-2357a.appspot.com",
  messagingSenderId: "140283767301",
  appId: "1:140283767301:web:53f40b2e8d85044953ca6c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);