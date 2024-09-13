import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="user-profile">
      <img src={user.avatarUrl} alt="User Avatar" />
      <h2>{user.username}</h2>
      <p>Status: {user.statusMessage}</p>
    </div>
  );
};

export default UserProfile;
