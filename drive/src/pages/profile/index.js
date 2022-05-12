import React, { useContext, useState,useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { logout } from "../../firebase";


const Profile = () => {
    const context=useContext(UserContext);
    const [navigate, setNavigate] = useState(null);

    useEffect(() => {
      if (!user) {
        setNavigate("/");
      }
    }, [user]);
    if (navigate) {
      <Navigate to={navigate} />;
    }
    return (
        <h1>profile page</h1>;
        <button onClick={logout}>Log out</button>;

    );
};

export default Profile;
