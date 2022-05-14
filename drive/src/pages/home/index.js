import { signInWithPopup } from "firebase/auth";
import React from "react";


const Home = () => {
    return (
        <div>
            <h1>home page</h1>
            
        
            <button onClick={signInWithPopup}>signin</button>

        </div>
            
    );
};

export default Home;
