import React, { createContext, useEffect, useState } from 'react';
import app from './firebase/Firebase.config';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [datas,setDatas] = useState([]);
    const [user,setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const userLogin = ()=>{
        return signInWithPopup(auth,provider)
    }

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
        });

        return () => {
            unsubscribe();
        }

    }, [])
    const authInfo = {datas,userLogin,user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;