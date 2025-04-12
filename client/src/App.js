import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import './App.css';
import Navbar from "./components/Navbar";
import Search from "./pages/search";
import Profile from "./pages/profile";
import SignIn from './pages/SignIn';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBSA4lfRTFqjqzI-aLzVZf4zP7DiFcR-EY",
  authDomain: "airbnb-clone-c97e6.firebaseapp.com",
  databaseURL: "https://airbnb-clone-c97e6-default-rtdb.firebaseio.com",
  projectId: "airbnb-clone-c97e6",
  storageBucket: "airbnb-clone-c97e6.appspot.com",
  messagingSenderId: "713305609141",
  appId: "1:713305609141:web:fd2c33386a7df1f8a1bffc",
  measurementId: "G-YYXCM8F3FY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// SignIn Component
const onSignIn = () => {
  const handleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Signed in as:", result.user.displayName);
        onSignIn(result.user);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error.message);
      });
  };

  return (
    <div>
      <h2>Please sign in</h2>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

// Home Page
const Home = () => {
  return <h1>
  <span role="img" aria-label="house">🏡</span> Welcome
</h1>

};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("User signed out"))
      .catch((error) => console.error("Sign-out error:", error.message));
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignIn onSignIn={setUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Navbar onSignOut={handleSignOut} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
