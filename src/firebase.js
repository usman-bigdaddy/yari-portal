// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAslKv-_pRQNG5YpKjFlcOReYXMzSQTqiU",
  authDomain: "yari-portal.firebaseapp.com",
  projectId: "yari-portal",
  storageBucket: "yari-portal.appspot.com",
  messagingSenderId: "1076065763155",
  appId: "1:1076065763155:web:9132727d2fea17eaffeba6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };
