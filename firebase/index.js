import { getStorage } from "firebase/storage";

import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBvpTLYDYZeWLktt0FhsdCk4OKPovOzn74",
  authDomain: "twitter-d28ae.firebaseapp.com",
  projectId: "twitter-d28ae",
  storageBucket: "twitter-d28ae.appspot.com",
  messagingSenderId: "779405744642",
  appId: "1:779405744642:web:8f832d356895e2810aa51b",
};



export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp);

export const db = getFirestore(firebaseApp);