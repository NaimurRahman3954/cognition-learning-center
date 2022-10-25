import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import app from '../firebase/firebase.init'
import { useEffect } from 'react'

export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: 'Akash' })
  //   const user = { displayName: 'Akash' }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log('auth state changed', currentUser)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    createUser,
    signIn,
    googleSignIn,
    githubSignIn,
    logOut,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default UserContext
