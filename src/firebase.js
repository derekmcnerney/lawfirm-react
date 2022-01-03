// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9C_qCEOZ31XNe_HvIstsWGWhV4viBl4U",
  authDomain: "lawfirm-61743.firebaseapp.com",
  projectId: "lawfirm-61743",
  storageBucket: "lawfirm-61743.appspot.com",
  messagingSenderId: "447252116175",
  appId: "1:447252116175:web:9ee8577e318ebbffde3dba",
  measurementId: "G-6330VDDNT5",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;
