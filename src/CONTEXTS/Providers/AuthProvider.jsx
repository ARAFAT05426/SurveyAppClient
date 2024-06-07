import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import axios from 'axios';
import AuthContext from '../AuthContext';
import auth from '../../FIREBASE/firebse.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };
  const saveUser = async user => {
    const currentUser = {
      name: user?.displayName,
      email: user?.email,
      role: 'user',
      payment: {}
    }
    const { data } = await axios.put(
      `${import.meta.env.VITE_API}/user`,
      currentUser
    )
    return data
  }
  const updateUserProfile = async (name, photo) => {
    if (auth.currentUser) {
      try {
        await updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
  };

  const getToken = async (email) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API}/jwt`,
        { email },
        { withCredentials: true }
      );
      localStorage.setItem('token', data.token);
      return data.token;
    } catch (error) {
      console.error('Error fetching token:', error);
      return null;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await getToken(currentUser.email);
        await saveUser(currentUser)
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;