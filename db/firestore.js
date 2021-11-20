import firebase from "firebase";
import "firebase/firestore";

const configuration = {
  apiKey: "AIzaSyBVvAaOQZ0VgOC2Ec65GvcNoAzoED1NfI8",
  authDomain: "carparkrnfb-ccced.firebaseapp.com",
  projectId: "carparkrnfb-ccced",
  storageBucket: "carparkrnfb-ccced.appspot.com",
  messagingSenderId: "338454894162",
  appId: "1:338454894162:web:867360cc708b1679fa718b",
  measurementId: "G-87PVTKY4BW",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(configuration);

export const db = firebaseApp.firestore();
