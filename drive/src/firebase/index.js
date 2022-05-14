/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";
/*import { getAnalytics } from "firebase/analytics";*/
import { getAuth, GoogleAuthProvider,signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJ_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
/*export const analytics = getAnalytics(app);*/
export const provider = new GoogleAuthProvider();
export const logout=()=>{
    signOut(auth).then(() => {
        console.log("user logged out");
    
    }).catch((error) => {
        console.log(error.code);
        
    });
      

};

