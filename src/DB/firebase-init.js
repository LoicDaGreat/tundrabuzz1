// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArDyKkdh3GFz5Xey6aMkRv8kDWji4cDWw",
  authDomain: "tundrabuzz.firebaseapp.com",
  databaseURL: "https://tundrabuzz-default-rtdb.firebaseio.com",
  projectId: "tundrabuzz",
  storageBucket: "tundrabuzz.appspot.com",
  messagingSenderId: "928075532430",
  appId: "1:928075532430:web:39a5eee467c13c1c8921df",
  measurementId: "G-WBVB20S17M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);