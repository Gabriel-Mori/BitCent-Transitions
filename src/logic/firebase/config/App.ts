// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDRzJ7Qd8bRbPARUZrNmvjf-Mx09lpUCQI",
  authDomain: "bitcent-538e9.firebaseapp.com",
  projectId: "bitcent-538e9",
  storageBucket: "bitcent-538e9.appspot.com",
  messagingSenderId: "289503032955",
  appId: "1:289503032955:web:bdd5e249ab6e3d2ff7d4de"
}

const app: FirebaseApp = initializeApp(firebaseConfig)

export { app }