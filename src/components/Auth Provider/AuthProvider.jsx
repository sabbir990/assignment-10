import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import { auth } from '../../assets/Firebase/firebase.config'

export const AuthContext = createContext(null)
export default function AuthProvider({children}) {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const authObject = {
        createUser
    }
  return (
    <AuthContext.Provider value={authObject}>
        {children}
    </AuthContext.Provider>
  )
}
