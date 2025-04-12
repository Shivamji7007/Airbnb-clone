// src/pages/Login.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

function Login() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User:', user);
      alert(`Welcome ${user.displayName}`);
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('Sign-In Failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default Login;
