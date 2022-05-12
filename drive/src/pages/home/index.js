import React from "react";
import { logout } from "./firebase";

const Home = () => {
    return (
        <>
            <h1>home page</h1>
            <button onClick={logout}>signout</button>
        </>
    );
};

export default Home;
