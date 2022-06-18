import React from "react";
import { UserContext } from "./context/UserContext"; //<----and this
import { useContext } from "react"; //<------------------- this
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext); // destracutar the state you want to use and here
  if (user) {
    navigate("/");
  }
  return <div>SignUp</div>;
};

export default SignUp;
