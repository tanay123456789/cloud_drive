import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {Navigate} from "react-router-dom";
import firebase from "firebase/app";
import {auth,provider} from ".../firebase";
import {signInWithPopup} from "firebase/auth";
import s from "./styles.css";

const Signin = () => {
    
    const context=useContext(UserContext);
    const [userName,setUserName]=useState("");

    const handleSignin=()=>{
        signInWithPopup(auth,provider)
            .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(credential);
            
                const token = credential.accessToken;
                console.log(token);

                // The signed-in user info.
                const user = result.user;
                setUserName(user);
                console.log(user);

            // ...
            }).catch((error) => {
            // Handle Errors here.
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.email;
                console.log(email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(credential);
            // ...
            });

        

        

        

    };
    const handleSubmit=e=>{
        e.preventDefault();
        handleSignin();
        if(context.user?.uid){
            return <Navigate to="/"/>;
        }
    };
    return (
        <button type="button" className={s.signinBtn} onClick={handleSubmit}>
            Sign in with Google
        </button>
    );
};







export default Signin;