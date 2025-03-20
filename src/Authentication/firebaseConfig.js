// Import Firebase services
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider,OAuthProvider } from "firebase/auth";

// Firebase configuration (Replace with your actual Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyDBCx2exNTZtCnujqusyr94qkKqJmyii9M",
  authDomain: "mvpfrontend.firebaseapp.com",
  projectId: "mvpfrontend",
  storageBucket: "mvpfrontend.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Initialize Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export { auth, googleProvider, facebookProvider,appleProvider };
