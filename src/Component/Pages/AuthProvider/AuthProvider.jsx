/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

import auth from "../Login & Register/firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const Authcontext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        // setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const login =(email, password) =>{
        setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const UserSignOut = ()=>{
        setLoading(true);
      return signOut(auth);
    }

    const provider = new GoogleAuthProvider();
    const googleLogin =()=>{
      setLoading(true);
      return  signInWithPopup(auth, provider);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('checking user');
           setUser(currentUser);
           setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
       user,
       createUser,
       loading,
       UserSignOut,
       login,
       googleLogin,
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;