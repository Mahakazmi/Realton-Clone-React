// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnFlS_LBx6_foKUqcFODzDBJ853fELATQ",
  authDomain: "realton-clone-react.firebaseapp.com",
  projectId: "realton-clone-react",
  storageBucket: "realton-clone-react.appspot.com",
  messagingSenderId: "607014532231",
  appId: "1:607014532231:web:b03bd00ba9be0717547422"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 