import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { Children, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    signOut(auth);
  };
  const values = {
    logout,
    signIn,
    createUser,
    currentUser: { displayName: "Tarik Kocovali" },
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
