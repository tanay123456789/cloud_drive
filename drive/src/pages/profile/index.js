import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router-dom";
import { logout } from "../../firebase";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [navigate, setNavigate] = useState(null);

  // useEffect(() => {
  //   if (!user) {
  //     setNavigate("/");
  //   }
  // }, [user]);
  // if (navigate) {
  //   <Navigate to={navigate} />;
  // }
  return (
    <div>
      <h1>profile page </h1>

      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Profile;
