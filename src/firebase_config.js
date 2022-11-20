import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyB9rguT2_hWxR9fOdcScXS1zJdCKveshS0",
    authDomain: "labview-btp01.firebaseapp.com",
    databaseURL: "https://labview-btp01-default-rtdb.firebaseio.com",
    projectId: "labview-btp01",
    storageBucket: "labview-btp01.appspot.com",
    messagingSenderId: "502815755427",
    appId: "1:502815755427:web:72288699f6f58f8d218316",
    measurementId: "G-N2PMLWPMFJ"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);