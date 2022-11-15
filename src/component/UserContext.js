/** @format */

import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from "./firebase/Firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)



  const provider = new GoogleAuthProvider();
  const userLogin = () => {
    setLoading(false)
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  const authInfo = { datas, userLogin, user,createUser,signIn,loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
