// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVvAaOQZ0VgOC2Ec65GvcNoAzoED1NfI8",
  authDomain: "carparkrnfb-ccced.firebaseapp.com",
  projectId: "carparkrnfb-ccced",
  storageBucket: "carparkrnfb-ccced.appspot.com",
  messagingSenderId: "338454894162",
  appId: "1:338454894162:web:867360cc708b1679fa718b",
  measurementId: "G-87PVTKY4BW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
