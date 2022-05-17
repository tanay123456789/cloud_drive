import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";
import props from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (user) => {
    console.log(user);
    if (user) {
      const { displayName, email } = user;

      setUser({ displayName, email });
    } else {
      console.log("error while authenticating the user");
    }
  });

  // useEffect(()=>{

  // },[])

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
