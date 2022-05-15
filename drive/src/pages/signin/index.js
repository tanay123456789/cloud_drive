import React, { useContext, useState,useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {Navigate} from "react-router-dom";
/*import {auth,provider} from "../../firebase";*/
import {signInWithGoogle} from "../../firebase";
import s from "./styles.css";

const Signin = () => {
    
    const user=useContext(UserContext);
    const [navigate,setNavigate]=useState(null);
    useEffect(() => {
        if (user) {
          setNavigate('/profile')
        }
      }, [user])
      if (navigate) {
        <Navigate to={navigate}/>
      }
    

    
    return (
        <button type="button" className={s.signinBtn} onClick={signInWithGoogle}>
            Sign in with Google
        </button>
    );
};







export default Signin;