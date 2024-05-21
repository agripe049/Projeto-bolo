import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const API_KEY = process.env.FB_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "tcc-projeto-33881.firebaseapp.com",
  projectId: "tcc-projeto-33881",
  storageBucket: "tcc-projeto-33881.appspot.com",
  messagingSenderId: "300181141866",
  appId: "1:300181141866:web:efa2a11cd7de6b51d30d13",
  measurementId: "G-361P9042S6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };