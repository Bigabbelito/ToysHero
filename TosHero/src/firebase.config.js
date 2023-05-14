import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCQW5Rn-Qp4zVwpCftMJJM1NfIbSMKqLQM",
  authDomain: "toyshero-9ecb9.firebaseapp.com",
  projectId: "toyshero-9ecb9",
  storageBucket: "toyshero-9ecb9.appspot.com",
  messagingSenderId: "818693773349",
  appId: "1:818693773349:web:feac33ff219cc60b6087cc",
  measurementId: "G-EQPZ9P5910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app