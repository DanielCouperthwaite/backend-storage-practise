// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV92GGvb3Kj2giDiMBX6W2ddJSeiwq35A",
  authDomain: "backend-storage-practise.firebaseapp.com",
  projectId: "backend-storage-practise",
  storageBucket: "backend-storage-practise.appspot.com",
  messagingSenderId: "663894954342",
  appId: "1:663894954342:web:7c9e27e75090ab60a9b8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)