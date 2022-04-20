import React from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Signin from "./pages/signin";
//import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<Signin />} />
                
            </Routes>
        </Router>
    );
};

export default App;
