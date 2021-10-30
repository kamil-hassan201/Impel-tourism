import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from '../Firebase/firebase.init'

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //google sign in
    const signinUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //github signin
    const signinUsingGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    //log out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((err) => {
                setError(err.message)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    //sign up with email password
    const signupUsingEmail = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //update name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {

        }).catch((err) => {
            setError(err)
        });
    }

    //sign in with email
    const signinUsingEmail = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //observe state change
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribed;
    }, [])

    return {
        auth,
        user,
        error,
        isLoading,
        setUser,
        setError,
        setIsLoading,
        signinUsingGoogle,
        signinUsingGithub,
        logOut,
        signupUsingEmail,
        setUserName,
        signinUsingEmail,
    }

}

export default useFirebase;