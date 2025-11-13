import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  
  
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Signup
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // profile  Update
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };


  // Signin with email and password
  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google signin
  const signInWithEmailFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Signout
  const signOutUserFunc = () => {
    return signOut(auth);
  };

 
  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    signInWithEmailFunc,
    signOutUserFunc,
    
    updateProfileFunc,
   
    loading,
    setLoading,
  };

  // auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);
      setLoading(false); 
    });

    return () => unsubscribe();
  }, []);

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
