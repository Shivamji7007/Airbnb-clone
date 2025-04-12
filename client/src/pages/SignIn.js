import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { FcGoogle } from 'react-icons/fc';
import airbnbLogo from './assets/airbnb-logo.svg'; // Place Airbnb logo in /assets

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User signed in:', userCredential.user);
        navigate('/home');
      })
      .catch((error) => {
        setError(error.message);
        console.error('Error during sign-in:', error);
      });
  };

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google signed in:', result.user);
        navigate('/home');
      })
      .catch((error) => {
        setError(error.message);
        console.error('Google Sign-In error:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full sm:w-[400px]">
        
        {/* Airbnb Logo */}
        <div className="flex justify-center mb-6">
        <img src={airbnbLogo} alt="Airbnb Logo" className="h-10 mx-auto mb-6 border border-red-500" />

        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Welcome back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Login to continue</p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center justify-between mt-6">
          <hr className="w-full border-gray-300" />
          <span className="text-sm text-gray-400 mx-2">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 mt-4 border border-gray-300 text-gray-700 font-medium rounded-md flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
          <FcGoogle size={22} />
          Sign in with Google
        </button>

        <div className="text-center mt-5">
          <p className="text-sm text-gray-500">
            Don’t have an account?{' '}
            <a href="/signup" className="text-red-500 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
