import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxxRC3ZZG8llpj-QD0mob5K2JfNP_nTDw",
  authDomain: "irctc-clone-69abc.firebaseapp.com",
  projectId: "irctc-clone-69abc",
  storageBucket: "irctc-clone-69abc.firebasestorage.app",
  messagingSenderId: "39611618442",
  appId: "1:39611618442:web:71bac8ee3c033e155d4973",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();

export default app;
