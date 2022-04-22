import React from "react";
import { UserContext } from "../../context/UserContext";
import {app,auth,provider} from ".../firebase";
import {signInWithPopup} from "firebase/auth";
import s from "./styles.css";

const Signin = () => {
    const handleSignin=()=>{
        signInWithPopup(auth,provider);
        

    }
    return (
        <button type="button" className={s.signinBtn} onClick={handleSignin}>
            Sign in with Google
        </button>
    );
};




export default Signin;
