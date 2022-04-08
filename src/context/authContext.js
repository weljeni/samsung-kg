import fire from '../fire';
import React, { useEffect, useState } from 'react';

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("")
    const [error, setError] = useState("")
    function handleLogin(email, password, navigate) {
        setError("");
        fire.auth().signInWithEmailAndPassword(email, password).then(() => navigate("/")).catch((err) => setError(err.message))
    }

    function handleSignUp(email, password, navigate) {
        setError("")
        fire.auth().createUserWithEmailAndPassword(email, password).then(() => handleLogin(email, password, navigate)).catch((err) => setError(err.message))
    }
    function handleLogout() {
        fire.auth().signOut()
    }
    function authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user.email)
            } else {
                setCurrentUser("")
            }
        })
    }
    useEffect(() => {
        authListener()
    }, [])
    return <authContext.Provider value={{ currentUser, error, handleLogin, handleSignUp, handleLogout }}>{children}</authContext.Provider>
}
export default AuthContextProvider