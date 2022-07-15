import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

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
// export const auth = getAuth(app);
export const Db = getFirestore(app); 
export const storage = getStorage(app); 