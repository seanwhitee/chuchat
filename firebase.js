import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsBZDhadS8NatAL1EGv4JrkW9kqim-yfg",
  authDomain: "chuchat-message-app.firebaseapp.com",
  projectId: "chuchat-message-app",
  storageBucket: "chuchat-message-app.appspot.com",
  messagingSenderId: "852894820361",
  appId: "1:852894820361:web:18dd04c2cd4b5fd14b70d8"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
