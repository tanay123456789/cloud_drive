import React from "react";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Signin from "./pages/signin";

import Footer from "./layout/Footer";
import Header from "./layout/Header";


//import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
            <Footer/>
        </Router>
    );
};


export default App;
