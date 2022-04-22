import React,{useState,useContext} from "react";
import{
    Navbar,Nav,NavItem,NavLink
} from "reactstrap";

import {Link} from "react-router-dom";

import { UserContext } from "../context/UserContext";


const Header = () => {
    const context=useContext(UserContext);
    return(
        <Navbar color="warning">
            <Nav className="ml-auto">
                {context.user?(
                    <NavItem>
                        <NavLink onClick={()=>{context.setUser(null);}} to="/signin">
                        Logout

                        </NavLink>
                    </NavItem>):(
                    <NavItem>
                        <NavLink tag={Link} to="/signin">
                        Signin
                        </NavLink>

                    </NavItem>
                    
                )}

            </Nav>


        </Navbar>


    ); 
};

export default Header;
