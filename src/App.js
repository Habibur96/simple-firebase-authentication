
import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    // ====================================================
    //                    Sign-In   
    // =============================================
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log('error', error);
      })
  }

  // ====================================================
  //                 Sign-Out
  // =============================================
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        //Using ternary operator
        //Syntax: condition ? true : false
        user.email ? <button onClick={handleSignOut}>Sign Out</button> : <button onClick={handleGoogleSignIn}>Google Sign In</button>
      }

      <h3>Name: {user.displayName}</h3>
      <h3>Name: {user.displayName}</h3>
      <h3>Email: {user.email}</h3>
      <img src={user.photoURL} alt="" />
    </div>

  );
}

export default App;
