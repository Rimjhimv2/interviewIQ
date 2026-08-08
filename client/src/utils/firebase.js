import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-753fa.firebaseapp.com",
  projectId: "interviewiq-753fa",
  storageBucket: "interviewiq-753fa.firebasestorage.app",
  messagingSenderId: "494386182273",
  appId: "1:494386182273:web:6b44cc303da5ccc15a3580",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };