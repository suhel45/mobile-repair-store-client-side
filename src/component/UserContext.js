import React, { createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();
const UserContext = ({children}) => {
    const [datas,setDatas] = useState([]);



    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setDatas(data))
    },[])
    const authInfo = {datas}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;