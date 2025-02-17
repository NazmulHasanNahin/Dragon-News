// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATvvTxsiXduy0LpjMFv_om2HghxFKHbT8",
  authDomain: "dragon-news-ce57d.firebaseapp.com",
  projectId: "dragon-news-ce57d",
  storageBucket: "dragon-news-ce57d.firebasestorage.app",
  messagingSenderId: "365831274723",
  appId: "1:365831274723:web:b7f8b99ae398ce7e1c45d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;