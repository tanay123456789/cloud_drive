import React, { useContext, useState,useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import {Navigate} from "react-router-dom";
import {auth,provider} from "../../firebase";
import {signInWithPopup} from "firebase/auth";
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
    

    const handleSignin=()=>{
        signInWithPopup(auth,provider)
            .then((result) => {
            
                const credential = provider.credentialFromResult(result);
                console.log(credential);
            
                const token = credential.accessToken;
                console.log(token);

                
                const user = result.user;
                
                console.log(user);

            
            }).catch((error) => {
            
                const errorCode = error.code;
                console.log(errorCode);
                
            });

        

        

        

    };
    const handleSubmit=e=>{
        e.preventDefault();
        handleSignin();
       
    };
    return (
        <button type="button" className={s.signinBtn} onClick={handleSubmit}>
            Sign in with Google
        </button>
    );
};







export default Signin;