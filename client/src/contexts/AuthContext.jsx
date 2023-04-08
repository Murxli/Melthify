import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase.config"
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const provider = new GoogleAuthProvider();


  function signupWithEP(email, password) {
    return createUserWithEmailAndPassword(auth,email,password);
  }

  function loginWithEP(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = async() =>{
    return signInWithPopup(auth, provider)
    };

  function logout() {
    return auth.signOut();
  }



  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loginWithEP,
    signupWithEP,
    signInWithGoogle,
    logout,

  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}