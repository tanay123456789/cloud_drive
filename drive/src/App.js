import React from "react";
import Home from "./pages/home";
/*import Profile from "./pages/profile";*/
import Signin from "./pages/signin";
import PageNotFound from "./pages/notfound";

import Footer from "./layout/Footer";
import Header from "./layout/Header";

/*import UserProvider from "./context/UserContext";*/


//import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
    return (
        
        
            <Router>
                
                <Routes>
                    <Route path="/" element={<Signin/>}/>
                    <Route path="/home/:id" element={<Home/>} />
                    
                    <Route path="*" element={<PageNotFound />}/>
                </Routes>
                
            </Router>
        
    );
};





export default App;