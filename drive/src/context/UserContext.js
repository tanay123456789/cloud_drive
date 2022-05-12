import { createContext, useEffect } from "react";

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
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )

}
export default UserProvider;