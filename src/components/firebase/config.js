// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVUk3Jg7XWY8_I9SKn-Beu9AORfTpCMU4",
  authDomain: "ecommerce-dandrea-4585e.firebaseapp.com",
  projectId: "ecommerce-dandrea-4585e",
  storageBucket: "ecommerce-dandrea-4585e.appspot.com",
  messagingSenderId: "697552431305",
  appId: "1:697552431305:web:43bb985ed664f252148518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}