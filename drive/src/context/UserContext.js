import React, {useState, useEffect,  createContext} from "react";

import { onAuthStateChanged }  from "firebase/auth";


export const UserContext=createContext({user:null});

const UserProvider=()=>{
    const [user,setUser]=useState(null);
    useEffect(()=>{
        onAuthStateChanged(async (user) => {
            const { displayName, email }  = user;
            setUser({
              displayName,
              email
            })
    
        })

    },[])
    return (
        <UserContext.Provider value={user}></UserContext.Provider>
    )

}
export default UserProvider;