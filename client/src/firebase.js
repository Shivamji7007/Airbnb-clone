// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBSA4lfRTFqjqzI-aLzVZf4zP7DiFcR-EY',
  authDomain: 'airbnb-clone-c97e6.firebaseapp.com',
  projectId: 'airbnb-clone-c97e6',
  storageBucket: 'airbnb-clone-c97e6.appspot.com',
  messagingSenderId: '713305609141',
  appId: '1:713305609141:web:fd2c33386a7df1f8a1bffc',
  measurementId: 'G-YYXCM8F3FY',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
