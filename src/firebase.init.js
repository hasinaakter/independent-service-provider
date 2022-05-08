// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKGafp7pgBBYdCL5w46cVGvbeqOfTdZEI",
  authDomain: "independent-service-prov-bfa65.firebaseapp.com",
  projectId: "independent-service-prov-bfa65",
  storageBucket: "independent-service-prov-bfa65.appspot.com",
  messagingSenderId: "549098223939",
  appId: "1:549098223939:web:24763a6b7f59165f8b57f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;