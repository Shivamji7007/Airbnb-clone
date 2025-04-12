import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase'; // Assuming firebase has been properly initialized

const Home = () => {
  const navigate = useNavigate();

  // Function to handle sign-out
  const handleSignOut = () => {
    signOut(auth) // Sign out from Firebase Auth
      .then(() => {
        console.log("Signed out successfully");
        navigate('/'); // Redirect to the sign-in page after logging out
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  // Get the currently signed-in user
  const user = auth.currentUser;

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user ? (
        <div>
          <p>Hello, {user.displayName}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
};

export default Home;
