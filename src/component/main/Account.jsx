import React, { useEffect } from "react";

import { UserContext } from "../context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
import { useNavigate } from "react-router-dom";
const Account = () => {
  const { setUser, user } = useContext(UserContext); // destracutar the state you want to use and here
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return (
    <div className="account-page">
      <h3>Wellcom {user.name}, in your account</h3>
      <img alt="user protofile " src={user.avatar_url}></img>
      <p>your username for loging in is : {user.username}</p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          setUser(null);
          navigate("/");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Account;
